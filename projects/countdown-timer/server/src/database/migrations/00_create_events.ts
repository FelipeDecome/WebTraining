import Knex from 'knex';

export async function up(knex: Knex) {

    return knex.schema.createTable('events', table => {

        table.increments('id').primary();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('address').notNullable();

        table.text('annotations');
        table.integer('date').notNullable();
        table.integer('creation_date').notNullable();
    });
}

export async function down(knex: Knex) {

    return knex.schema.dropTable('events');
}
