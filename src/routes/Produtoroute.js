const express = require('express')

const routes = express.Router()

const produtoController = require('../controller/produtoController')

routes.get('/',produtoController.list)

routes.post('/',produtoController.filtro)

routes.get('/add',produtoController.abreadd)

routes.post('/add',produtoController.add)

routes.get('/edt/:id',produtoController.abreedit)

routes.post('/edt/:id',produtoController.edit)

routes.get('/del/:id',produtoController.del)

module.exports = routes;