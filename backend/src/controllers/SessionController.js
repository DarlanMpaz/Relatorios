const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const colaborador = await connection('colaboradores')
            .where('id', id)
            .select('name')
            .first();

        if (!colaborador) {
            return response.status(400).json({ error: 'Nenhum colaborador encontrado com essa ID' });
        }

        return response.json(colaborador);
    },
};