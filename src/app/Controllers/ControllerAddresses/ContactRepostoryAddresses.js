const client = require('..//..//db/db');

class ContactControllerAdresses{
    async IndexEdresses(){
        try{
            const rows = await client.query(`SELECT * FROM endereco`);
             return rows;
        }
        catch(err){
            throw err
        }
       
    };
    async IndexID(id){
        try{
            const rows = await client.query(`SELECT * FROM endereco WHERE id_endereco = $1`,[id]);
            return rows;
        }
        catch(err){
            throw err
        }
    }
    async CreateEddresses(rua, bairro, numero, cep, user_id){
        try{
            const rows = await client.query
            (`INSERT INTO endereco(rua, bairro, numero, cep, user_id) 
              VALUES($1,$2,$3,$4,$5)`, [rua, bairro, numero, cep, user_id]);
            return rows;  
        }
        catch(err){
            throw err
        }
    }
    async UpdateEddresses(id_endereco, rua, bairro, numero, cep){
        try{
            const rows = await client.query
            (`UPDATE endereco 
            SET rua = $2, bairro = $3, numero = $4, cep = $5
            WHERE id_endereco = $1`,[id_endereco, rua, bairro, numero, cep]);
            return rows; 
        }
        catch(err){
            throw err
        }
    }
    async DeleteEddresses(id){
        try{
            const rows = await client.query(`DELETE FROM endereco WHERE id_endereco = $1`,[id]);
            return rows;
        }
        catch(err){
            throw err
        }
    }

};

module.exports = new ContactControllerAdresses();