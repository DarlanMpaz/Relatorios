exports.up = function(knex) {
    return knex.schema.createTable('vendas', function(table) {
        table.increments();

        table.string('cliente').notNullable();
        table.decimal('venda').notNullable();
        table.string('pagamento').notNullable();
        table.string('entrega').notNullable();
        table.integer('dia').notNullable();
        table.integer('mes').notNullable();
        table.integer('ano').notNullable();

        table.string('colaborador_id').notNullable();

        table.foreign('colaborador_id').references('id').inTable('colaboradores');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vendas');
}
