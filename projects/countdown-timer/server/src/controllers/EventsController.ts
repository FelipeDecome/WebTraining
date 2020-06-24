import { Request, Response } from 'express'
import knex from './../database/conn'

export default class EventsController {

    async index(request: Request, response: Response) {

        // Buscar por evento
        const events = await knex('events')

        return response.json(events)
    }

    async create(request: Request, response: Response) {

        const {
            title,
            description,
            address,
            annotations,
        } = request.body

        const date = new Date(request.body.date)

        const event = {
            title,
            description,
            address,
            annotations,
            date: date.getTime(),
            creation_date: Date.now(),
        }

        // Adiciona na tabela Eventos e guarda o ID retornado
        const [event_id] = await knex('events').insert(event)

        return response.json({
            id: event_id,
            ...event
        })
    }
}
