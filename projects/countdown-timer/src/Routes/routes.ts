import express from 'express'

const router = express.Router()

import EventsController from './../controllers/EventsController'

const eventsController = new EventsController()

router.post('/events', eventsController.create)

export default router
