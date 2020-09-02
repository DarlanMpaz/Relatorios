const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const colaborador_id = request.headers.authorization;

        const vendas = await connection('vendas')
            .where('colaborador_id', colaborador_id)
            .select('*');

        return response.json(vendas);
    },
};