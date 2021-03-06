const connetion = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const colaboradores = await connetion('colaboradores').select('*');
    
        return response.json({colaboradores});
    },

    async create(request, response) {
        const { name, email, whatsapp } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connetion('colaboradores').insert({
            id,
            name,
            email,
            whatsapp
        });
        
        return response.json({ id });
    },
};