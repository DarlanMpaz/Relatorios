const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

        const vendas = await connection('vendas')
            .join('colaboradores', 'colaboradores.id', '=', 'vendas.colaborador_id')
            .limit(5)
            .offset((page-1)*5)
            .select(['vendas.*', 'colaboradores.name']);
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json({ vendas });
    },

    async indexAll(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const now = new Date();
            const dia = now.getDate();
            const mes = now.getMonth()+1;
            const ano = now.getFullYear();

        const vendas = await connection('vendas')
            .join('colaboradores', 'colaboradores.id', '=', 'vendas.colaborador_id')
            .limit(5)
            .offset((page-1)*5)
            .select(['vendas.*', 'colaboradores.name'])
            .where('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano);
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json({ vendas });
    },

    async filterDate(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const vendas = await connection('vendas')
            .join('colaboradores', 'colaboradores.id', '=', 'vendas.colaborador_id')
            .limit(5)
            .select(['vendas.*', 'colaboradores.name'])
            .where('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano);
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json({ vendas });
    },

    async countVenda(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const sumVenda = await connection('vendas')
            .join('colaboradores', 'colaboradores.id', '=', 'vendas.colaborador_id')
            .select('vendas.id')
            .where('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano)
            .sum('venda');
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json({ sumVenda });
    },

    async countPagamento(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const sumPagamento = await connection('vendas')
            .select('vendas.pagamento')
            .where({'pagamento': 'aprazo'})
            .count();
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json({ sumPagamento });
    },

    async create(request, response) {
        const { 
            cliente, 
            venda, 
            pagamento, 
            entrega, 
            dia, 
            mes, 
            ano
        } = request.body;
        
        const colaborador_id = request.headers.authorization;

        const [ id ] = await connection('vendas').insert({
            cliente,
            venda,
            pagamento,
            entrega,
            dia,
            mes,
            ano,
            colaborador_id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const colaborador_id = request.headers.authorization;

        const venda = await connection('vendas')
        .where('id', id)
        .select('colaborador_id')
        .first();

        if (venda.colaborador_id !== colaborador_id) {
            return response.status(401).json({ error: 'Operation not permited.' });
        }

        await connection('vendas').where('id', id).delete();

        return response.status(204).send();
    }
};