import { Router } from 'express'
import { AppointmentExpressController } from '../controller/appointment.express.controller'
import { createAppointmentExpressValidator, updateAppointmentExpressValidator } from '../model'

const appointmentController = new AppointmentExpressController()

const router = Router()
router.get('/', appointmentController.getAll)
router.get('/:id', appointmentController.get)
router.post('/', ...createAppointmentExpressValidator, appointmentController.create)
router.patch('/:id', ...updateAppointmentExpressValidator, appointmentController.update)
router.delete('/:id', appointmentController.delete)

export default router