const express = require('express');

const ColaboradorController = require('./controllers/ColaboradorController');
const VendasController = require('./controllers/VendaController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/colaboradores', ColaboradorController.index);
routes.post('/colaboradores', ColaboradorController.create);

routes.get('/profile', ProfileController.index);

routes.get('/vendas', VendasController.index);
routes.post('/vendas', VendasController.create);
routes.delete('/vendas/:id', VendasController.delete);

module.exports = routes;