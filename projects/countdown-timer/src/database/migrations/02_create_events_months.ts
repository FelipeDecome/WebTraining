import Knex from 'knex';

export async function up(knex: Knex) {

    return knex.schema.createTable('events_months', table => {

        table.increments('id').primary();

        table.integer('event_id').notNullable();
        table.integer('month_id').notNullable();
    });
}

export async function down(knex: Knex) {

    return knex.schema.dropTable('events');
}
