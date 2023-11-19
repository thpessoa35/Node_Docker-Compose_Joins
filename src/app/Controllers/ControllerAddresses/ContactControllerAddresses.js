const ContactRepositoryAdresses = require('./ContactRepostoryAddresses');

class ContactControllerAdresses{
    async FindALL(req, res){
        try{
            const findEddresses = await ContactRepositoryAdresses.IndexEdresses();
            res.json(findEddresses.rows)
        }
        catch(err){
            res.status(404).json({message: "Erro nao consultar Endereco"})
        }    
    }
    async FindID(req, res){
        try{
            const { id } = req.params;

            const findIDEddresses = await ContactRepositoryAdresses.IndexID(id);
            res.json(findIDEddresses.rows)
        }
        catch(err){
            res.status(404).json({message: "Endereco nao localizado"})
        }    
    }
    async Create(req, res){
        try{
            const { rua, bairro, numero, cep, user_id } = req.body;

            const CreateEddresses = await ContactRepositoryAdresses.CreateEddresses(rua, bairro, numero, cep, user_id);
            res.json({message: 'Endereço Criado com Sucesso!'})
        }
        catch(err){
            res.status(404).json({message: "Erro ao criar Endereco"})
        }    
    }
    async Update(req, res){
        try{
            const {id_endereco, rua, bairro, numero, cep } = req.body;

            const UpdateEddresses = await ContactRepositoryAdresses.UpdateEddresses(id_endereco , rua, bairro, numero, cep);
            res.json({message: 'Endereço alterado com Sucesso!'})
        }
        catch(err){
            res.status(404).json({message: 'Erro ao atualizar Endereco'})
        }    
    }
    async Delete(req, res) {
        try{
            const { id } = req.params;

            const DeleteEddresses = await ContactRepositoryAdresses.DeleteEddresses(id);
            res.json({message: "Endereco Deletado com Sucesso"})
        }
        catch(err){
            res.status(404).json({message: "Erro ao deletar Endereco"})
        } 
    } 

}

module.exports = new ContactControllerAdresses()