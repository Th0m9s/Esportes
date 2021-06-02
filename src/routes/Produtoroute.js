const express = require('express')

const routes = express.Router()

const produtoController = require('../controller/produtoController')

routes.get('/',produtoController.list)

routes.post('/',produtoController.filtro)

routes.get('/add',produtoController.abreadd)

routes.post('/add',produtoController.add)

routes.get('/edit/:id',produtoController.abreedit)

routes.post('/edit/:id',produtoController.edit)

routes.get('/del/:id',produtoController.del)

module.exports = routes;