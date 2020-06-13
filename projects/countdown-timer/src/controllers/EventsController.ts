import { Request, Response } from 'express'
import knex from './../database/conn'

export default class EventsController {

    async index(request: Request, response: Response) {

        const { month } = request.params

        // Buscar por evento e separar por mês

        // const events = await knex('events').select('*')
        const eventIds =
            await knex('months')
                .join('events_month', 'months.id', '=', 'events_month.month_id')
                .where('months.monFull', month)
                .orWhere('months.monNum', month)
                .select('events_month.event_id')

        // const events =

        return response.json(eventIds)
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
