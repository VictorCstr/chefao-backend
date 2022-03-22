const express = require('express')
const routes = express.Router()

const CategoriasController = require('../controllers/CategoriasController')
const SucosController = require('../controllers/SucosController')

routes.get('/', (req,res) => {
    res.send('Olá!')
})

module.exports = routes