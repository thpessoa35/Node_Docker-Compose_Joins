const client = require('..//db/db');


class ContactRepositoryJOIN {
    async index() {
        try {
            const rows = await client.query(`
                SELECT
                    u.id as user_id,
                    u.name,
                    u.sobre_nome,
                    u.idade,
                    (
                        SELECT JSON_AGG(
                            JSON_BUILD_OBJECT(
                                'id_endereco', e.id_endereco,
                                'rua', e.rua,
                                'bairro', e.bairro,
                                'numero', e.numero,
                                'cep', e.cep
                            )
                        )
                        FROM endereco e
                        WHERE e.user_id = u.id
                    ) as enderecos,
                    (
                        SELECT JSON_AGG(
                            JSON_BUILD_OBJECT(
                                'email', email.email,
                                'password', email.password
                            )
                        ) as email
                        FROM email
                        WHERE email.email_id = u.id
                    ) 
                FROM users u
            `);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async indexID(id) {
        try {
            const rows = await client.query(`
                SELECT
                    u.id as user_id,
                    u.name,
                    u.sobre_nome,
                    u.idade,
                    (
                        SELECT JSON_AGG(
                            JSON_BUILD_OBJECT(
                                'id_endereco', e.id_endereco,
                                'rua', e.rua,
                                'bairro', e.bairro,
                                'numero', e.numero,
                                'cep', e.cep
                            )
                        )
                        FROM endereco e
                        WHERE e.user_id = u.id
                    ) as enderecos,
                    (
                        SELECT JSON_AGG(
                            JSON_BUILD_OBJECT(
                                'email', email.email,
                                'password', email.password
                            )
                        ) as email
                        FROM email
                        WHERE email.email_id = u.id
                    ) 
                FROM users u
                WHERE u.id = $1;
            `, [id]);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async UsersAddresses() {
        try {
            const rows = await client.query(`
                SELECT users.id as id, users.name, users.sobre_nome, users.idade,
                ( 
                    SELECT JSON_AGG(
                        JSON_BUILD_OBJECT(
                            'id_endereco', endereco.id_endereco,
                            'rua', endereco.rua,
                            'bairro', endereco.bairro,
                            'numero', endereco.numero,
                            'cep', endereco.cep
                        )   
                    ) FROM endereco WHERE endereco.user_id = users.id 
                ) as endereco
                FROM users;
            `);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async UsersEmail(id) {
        try {
            const rows = await client.query(`
                SELECT users.id, users.name, users.sobre_nome, users.idade,
                (
                    SELECT JSON_AGG(
                        JSON_BUILD_OBJECT(
                            'email', email.email,
                            'password', email.password
                        )
                    ) FROM email WHERE email.email_id = users.id
                ) as email
                FROM users WHERE users.id = $1
            `, [id]);
            return rows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ContactRepositoryJOIN()