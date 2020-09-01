const express = require('express');
const crypto = require('crypto');
const connetion = require('./database/connection');

const routes = express.Router();

routes.get('/colaboradores', async (request, response) => {
    const colaboradores = await connetion('colaboradores').select('*');

    return response.json({colaboradores});
});

routes.post('/colaboradores', async (request, response) => {
    const { name } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connetion('colaboradores').insert({
        id,
        name
    });
    
    return response.json({ id });
});

module.exports = routes;