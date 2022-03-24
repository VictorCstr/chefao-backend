const slugify = require('slugify');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

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
    returnOneJuice: async(req,res) =>{
        let slug = req.params.slug
        await Sucos.findOne({
            where: {slug}
        }).then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },

    returnAllJuices: async(req,res) =>{
        await Sucos.findAll()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },
    returnJuiceByName : async (req,res) =>{   
        let busca = req.body.busca
        await Sucos.findAll({ 
            where: { 
                nome: { 
                    [Op.like] : `%${busca}%` }},
            raw:true
        })      
        .then(response => {
            console.log(response)
        return res.status(200).json(response);
        }).catch(error => {
        return res.status(500).json(error);
        })
    }
}

module.exports = SucosController