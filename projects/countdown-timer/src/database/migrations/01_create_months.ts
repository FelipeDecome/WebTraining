import Knex from 'knex';

export async function up(knex: Knex) {

    return knex.schema.createTable('months', table => {

        table.increments('id').primary();

        table.integer('month_ref').notNullable();
        table.integer('year').notNullable();
    });
}

export async function down(knex: Knex) {

    return knex.schema.dropTable('events');
}
