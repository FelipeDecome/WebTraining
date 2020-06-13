import express from 'express'
import knex from './../database/conn'

const router = express.Router()

import EventsController from './../controllers/EventsController'

const eventsController = new EventsController()

router.post('/events', eventsController.create)

router.get('/events/:month', eventsController.index)

export default router
