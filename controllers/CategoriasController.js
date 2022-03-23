const {Sucos, Categorias} = require('../models/index')
const slugify = require('slugify')

const CategoriasController = {
    createCategory: async (req,res) =>{
        let {nome, descricao} = req.body
        await Categorias.create({
            nome,
            slug: slugify(nome),
            descricao
        }) 
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    } 
}

module.exports = CategoriasController