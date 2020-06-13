import { Request, Response } from 'express'
import knex from './../database/conn'

export default class EventsController {

    async create(request: Request, response: Response) {

        const {
            title,
            description,
            address,
            annotations,
            creation_date
        } = request.body

        const date = new Date(request.body.date);

        const event = {
            title,
            description,
            address,
            annotations,
            date: date.getTime(),
            creation_date,
        }

        const trx = await knex.transaction()

        const month = {
            month_ref: date.getMonth(),
            year: date.getFullYear(),
        }

        // Verifica se o mês existe na tabela month
        const tryMonth = await trx('months').where(month).select('id')

        // Se não existir adiciona à tabela
        const month_id = tryMonth ? tryMonth : await trx('months').insert(month) //Corrigir

        // Adiciona na tabela Eventos
        const event_id = await trx('events').insert(event)

        // Cria relação na tabela pivot
        const eventsMonth = {
            event_id,
            month_id,
        }

        await trx('events_months').insert(eventsMonth)

        return response.json({
            id: event_id,
            ...event
        })
    }
}
