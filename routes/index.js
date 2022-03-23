const express = require('express')
const routes = express.Router()

const CategoriasController = require('../controllers/CategoriasController')
const SucosController = require('../controllers/SucosController')


routes.post('/cadastrar', CategoriasController.createCategory)

routes.get('/juices', SucosController.returnJuices)
routes.get('/juices/:slug')
routes.get('/juices/:category', SucosController.returnJuicesByCategory)
routes.post('/cadastrarjuice', SucosController.createJuices)


module.exports = routes