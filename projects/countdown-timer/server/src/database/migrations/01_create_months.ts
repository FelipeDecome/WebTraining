import Knex from 'knex';

export async function up(knex: Knex) {

    return knex.schema.createTable('months', table => {

        table.increments('id').primary();

        table.string('monFull').notNullable();
        table.integer('monNum').notNullable();
        table.integer('year').notNullable();
    });
}

export async function down(knex: Knex) {

    return knex.schema.dropTable('months');
}
