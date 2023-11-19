const ContactRepositoryUser = require('./ContactRepositoryUser')

class ContactControllerUser {

    async indexUser(req, res){
        const FindALL = await ContactRepositoryUser.FindALL();
        res.json(FindALL.rows);
    };
    async indexID(req, res){
        const { id } = req.params;
        
        const FindID = await ContactRepositoryUser.FindID(id);
        res.json(FindID.rows);
    }
    async CreateUser(req, res){
        const {name, sobre_nome, idade} = req.body;

        const Create = await ContactRepositoryUser.CreateUser(name, sobre_nome, idade);
        res.json({message: "Usuario Criado!"})
    }
    async DeleteUser(req, res){
        const { id } = req.params;

        const DeleteUser = await ContactRepositoryUser.DeleteUser(id);
        res.json({message: "Usuario deletado com sucesso!"})
    }
    async UpdateUser(req, res){
        const { id, name, sobre_nome, idade } = req.body;
        
        const UpdateUser = await ContactRepositoryUser.UpdateUser(id, name, sobre_nome, idade);
        res.json({message: "Credencias alteradas!"})
    }



}

module.exports = new ContactControllerUser()