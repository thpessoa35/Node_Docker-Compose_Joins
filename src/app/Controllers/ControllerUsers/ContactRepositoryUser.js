const client = require('..//..//db/db')
 

class ContactRepositoryUser {

    async FindALL(){
        try {
            const rows = await client.query(`SELECT * FROM users`);
            return rows;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao buscar todos os usuários");
        }
    }

    async FindID(id){
        try {
            const rows = await client.query(`SELECT * FROM users WHERE id = $1`, [id]);
            return rows;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao buscar usuário por ID");
        }
    }

    async CreateUser(name, sobre_nome, idade){
        try {
            const rows = await client.query(`INSERT INTO users 
            (name, sobre_nome, idade) 
            VALUES ($1, $2, $3)`, [name, sobre_nome, idade]);
            return rows;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar usuário");
        }
    }

    async DeleteUser(id){
        try {
            const rows = await client.query(`DELETE FROM users where id = $1`, [id]);
            return rows;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao excluir usuário");
        }
    }

    async UpdateUser(id, name, sobre_nome, idade){
        try {
            const rows = await client.query(`UPDATE users 
            SET name = $2, sobre_nome = $3, idade = $4 WHERE id = $1`, 
            [id, name, sobre_nome, idade]);
            return rows;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar usuário");
        }
    }
}


module.exports = new ContactRepositoryUser()