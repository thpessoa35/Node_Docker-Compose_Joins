const ContactRepositoryJOIN = require('./ContactRepositoryJOIN');

class ContactControllerJOIN{
    async FindALL(req, res){
        const rows = await ContactRepositoryJOIN.index()
        res.json(rows.rows);
    }  
    async FindID(req, res){
        const { id } = req.params
        const rows = await ContactRepositoryJOIN.indexID(id)
        res.json(rows.rows);
    }
    async UsersEdresses(req, res){
        const rows = await ContactRepositoryJOIN.UsersAddresses();
        res.json(rows.rows);
    }
    async UsersEmail(req, res){
        const { id } = req.params
        const rows = await ContactRepositoryJOIN.UsersEmail(id)
        res.json(rows.rows);
    }
}

module.exports = new ContactControllerJOIN();