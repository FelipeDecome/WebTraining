import { Request, Response } from 'express'
import knex from './../database/conn'
import knexnest from 'knex'

interface Event {
    monFull: string
}

export default class EventsController {

    async index(request: Request, response: Response) {

        // Buscar por evento
        const events: Event[] =
            await knex('events')
                .join('events_month', 'events.id', '=', 'events_month.event_id')
                .join('months', 'events_month.month_id', '=', 'months.id')
                .select('events.*', 'months.monFull')

        const parsedEvents = events.sort((e1, e2) => e2.monFull - e1.monFull)

        return response.json(parsedEvents)
    }

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

        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]

        const monNum = date.getMonth();
        const monFull = months[monNum]
        const year = date.getFullYear()

        const month = {
            monFull,
            monNum,
            year
        }

        const trx = await knex.transaction()

        // Verifica se o mês existe na tabela month e retorna o ID caso exista
        const tryMonth = await trx('months').where(month).select('id')

        // Se não existir, adiciona à tabela e salva o ID
        const [month_id] =
            (tryMonth.length !== 0)
                ? tryMonth
                : await trx('months').insert(month)


        // Adiciona na tabela Eventos e guarda o ID retornado
        const [event_id] = await trx('events').insert(event)

        // Cria relação na tabela pivot
        const eventsMonth = {
            event_id,
            month_id,
        }

        await trx('events_month').insert({ ...eventsMonth })

        trx.commit()

        return response.json({
            id: event_id,
            ...event
        })
    }
}
