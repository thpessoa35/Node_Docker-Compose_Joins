const client = require('..//..//db/db');

class ContactRepositoryEmail{

    async index(){
        const rows = await client.query(`SELECT * FROM email`);
        return rows;
    }
    async createEmail(email, password, email_id){
        try{
            const rows = await client.query
            (`INSERT INTO email (email, password, email_id)
            VALUES ($1, $2, $3)`,[email, password, email_id]); 
            return rows;
        }
        catch(err){
            throw err
        }
    }
    

};

module.exports = new ContactRepositoryEmail();