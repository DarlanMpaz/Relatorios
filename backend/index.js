const express = require ('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        projeto: 'Ralatórios',
        autor: 'Darlan Paz'
    });
});

app.listen(3333);