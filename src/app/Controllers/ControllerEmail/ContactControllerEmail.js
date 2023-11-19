const ContactRepositoryEmail = require('.//ContactRepositoryEmail');

class ContactControllerEmail{
    async FindEmail(req, res){
        try{
            const email = await ContactRepositoryEmail.index();
            res.json(email.rows)                                            
        }
        catch(err){
            res.json({message: "email nao localizado!"})
        }
    }
    async Create(req, res){
        try{
            const { email, password, email_id } = req.body;

            const CreateEmail = await ContactRepositoryEmail.createEmail(email, password, email_id);

            res.status(200).json({message: "email Criado com sucesso"})
        }
        catch(err){
            res.status(404).json({message: "erro ao criar Email"})
        }
    }
};

module.exports = new ContactControllerEmail();