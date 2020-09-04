const express = require('express');

const ColaboradorController = require('./controllers/ColaboradorController');
const VendasController = require('./controllers/VendaController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const { countVenda } = require('./controllers/VendaController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/colaboradores', ColaboradorController.index);
routes.post('/colaboradores', ColaboradorController.create);

routes.get('/profile', ProfileController.index);

routes.get('/vendas', VendasController.index);
routes.post('/vendas', VendasController.create);
routes.delete('/vendas/:id', VendasController.delete);
routes.get('/vendas-all', VendasController.indexAll);
routes.post('/filter-date', VendasController.filterDate);

routes.post('/count-venda', VendasController.countVenda);
routes.post('/count-pagamento', VendasController.countPagamento);

module.exports = routes;