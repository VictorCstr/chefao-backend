const express = require('express')
const routes = express.Router()

const CategoriasController = require('../controllers/CategoriasController')
const SucosController = require('../controllers/SucosController')

routes.get('/categories', CategoriasController.returnAllCategories)
routes.get('/categories/:slug', CategoriasController.returnJuicesByCategory)
routes.post('/categories', CategoriasController.createCategory)

routes.post('/juice', SucosController.returnJuiceByName)
routes.get('/juices/', SucosController.returnAllJuices)
routes.get('/juices/:slug', SucosController.returnOneJuice)
routes.post('/juices', SucosController.createJuices)


module.exports = routes