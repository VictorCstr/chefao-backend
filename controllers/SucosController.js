const slugify = require('slugify');
const {Sucos, Categorias} = require('../models/index')

const SucosController = {
    createJuices: async (req,res) =>{
        let {nome, descricao,valor,linkFoto,id_categoria} = req.body
        await Sucos.create({
            nome,
            slug: slugify(nome),
            descricao,
            valor,
            linkFoto,
            id_categoria
        }) 
        .then(response => {
            return res.status(201).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },
    returnAllJuices: async(req,res) =>{
        Sucos.findAll()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },
    returnJuicesByCategory: async (req,res) =>{
        let slug = req.params.slug
        Categorias.findOne({
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

module.exports = SucosController