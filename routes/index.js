const express = require('express')
const routes = express.Router()

const CategoriasController = require('../controllers/CategoriasController')
const SucosController = require('../controllers/SucosController')
const usuariosController = require('../controllers/usuariosController')

routes.get('/categories', CategoriasController.returnAllCategories)
routes.post('/categories', CategoriasController.createCategory)

routes.get('/juices', SucosController.returnAllJuices)
routes.get('/juices/:slug', SucosController.returnJuicesByCategory)
routes.post('/juices', SucosController.createJuices)


module.exports = routes