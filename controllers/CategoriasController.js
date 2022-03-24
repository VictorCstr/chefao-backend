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
            return res.status(201).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },
    returnAllCategories: async(req,res) =>{
        Categorias.findAll()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },
    returnJuicesByCategory: async (req,res) =>{
        let slug = req.params.slug
        await Categorias.findOne({
           where: {slug},
           include: Sucos
        }).then(result => {
                return res.status(200).json(result);
            })
        .catch(error => {
        return res.status(500).json(error);
          })
    }
}

module.exports = CategoriasController