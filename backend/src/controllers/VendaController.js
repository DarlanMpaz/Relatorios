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
        const [count] = await connection('vendas')
            .count();

        const vendas = await connection('vendas')
            .join('colaboradores', 'colaboradores.id', '=', 'vendas.colaborador_id')
            .select(['vendas.*', 'colaboradores.name'])
       
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
    },




    async countPrazo(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const countPrazo = await connection('vendas')
            .select('vendas.pagamento')
            .where({'pagamento': 'aprazo'})
            .andWhere('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano)
            .count();
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json( {countPrazo} );
    },

    async countAvista(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const countAvista = await connection('vendas')
            .select('vendas.pagamento')
            .where({'pagamento': 'avista'})
            .andWhere('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano)
            .count();
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json( {countAvista} );
    },

    async countCartao(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const countCartao = await connection('vendas')
            .select('vendas.pagamento')
            .where({'pagamento': 'cartao'})
            .andWhere('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano)
            .count();
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json( {countCartao} );
    },




    async sumPrazo(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const sumPrazo = await connection('vendas')
            .select('vendas.pagamento')
            .where({'pagamento': 'aprazo'})
            .andWhere('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano)
            .sum('venda');
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json( {sumPrazo} );
    },

    async sumAvista(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const sumAvista = await connection('vendas')
            .select('vendas.pagamento')
            .where({'pagamento': 'avista'})
            .andWhere('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano)
            .sum('venda');
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json( {sumAvista} );
    },

    async sumCartao(request, response) {
        const { day, month, year } = request.body;

        const [count] = await connection('vendas')
            .count();

            console.log(count);

            const dia = day;
            const mes = month;
            const ano = year;

        const sumCartao = await connection('vendas')
            .select('vendas.pagamento')
            .where({'pagamento': 'cartao'})
            .andWhere('dia', dia)
            .andWhere('mes', mes)
            .andWhere('ano', ano)
            .sum('venda');
       
            response.header('X-Total-Count', count['count(*)']);

       return response.json( {sumCartao} );
    },
};
