const {Sucos, Categorias} = require('../models/index')

const SucosController = {
    createJuices: async (req,res) =>{
        let {nome, descricao,valor,linkFoto,id_categoria} = req.body
        await Sucos.create({
            nome,
            descricao,
            valor,
            linkFoto,
            id_categoria
        }) 
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },
    returnJuices: async(req,res) =>{
        Sucos.findAll()
    },
    returnJuicesByCategory: async (req,res) =>{
        Sucos.findAll({
           
        })
    }
}

module.exports = SucosController