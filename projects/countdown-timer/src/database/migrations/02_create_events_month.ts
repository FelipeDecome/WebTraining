import Knex from 'knex'

export async function up(knex: Knex) {

    return knex.schema.createTable('events_month', table => {

        table.increments('id').primary()

        table.integer('event_id')
            .notNullable()
            .references('id')
            .inTable('events')

        table.integer('month_id')
            .notNullable()
            .references('id')
            .inTable('months')
    })
}

export async function down(knex: Knex) {

    return knex.schema.dropTable('events_month')
}
