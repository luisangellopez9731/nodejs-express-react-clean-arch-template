import { Request, Response } from 'express'
import { AppointmentUseCase } from '../../application/Appointment.useCase';
import { CrudExpressController } from 'modules/shared/CrudExpressController';
import { errorResponse } from 'modules/shared/errorResponse.express';
import { AppointmentFirebaseRepository } from '../repository/firebase.repository';
import { validationResult } from 'express-validator';
import { AppointmentRepository, DTOCreateAppointment } from '../../domain';

const getAppointmentFirebaseRepository = () => new AppointmentFirebaseRepository("appointments")
const getAppointmentUseCase = (appointmentRepo: AppointmentRepository<any>) => new AppointmentUseCase(appointmentRepo)

export class AppointmentExpressController implements CrudExpressController {
  constructor() { }

  getAll = async (req: Request, response: Response) => {
    try {
      const repository = getAppointmentFirebaseRepository()
      const useCase = getAppointmentUseCase(repository)
      const appointments = await useCase.getAll()
      response.send(appointments)
    } catch (err) {
      console.log(err)
      errorResponse(err, response)
    }

  }
  get = async ({ params }: Request, response: Response) => {
    try {
      const repository = getAppointmentFirebaseRepository()
      const useCase = getAppointmentUseCase(repository)
      const appointment = await useCase.get(params.id)
      response.send(appointment)
    } catch (err) {
      errorResponse(err, response)
    }
  }
  create = async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).send({ errors: errors.array() });
      }
      const repository = getAppointmentFirebaseRepository()
      const useCase = getAppointmentUseCase(repository)

      const appointment = await useCase.create(request.body)
      response.send(appointment)
    } catch (err) {
      errorResponse(err, response)
    }

  }
  async update(request: Request, response: Response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).send({ errors: errors.array() });
      }
      const repository = getAppointmentFirebaseRepository()
      const useCase = getAppointmentUseCase(repository)
      const appointment = await useCase.update(request.params.id, request.body)
      response.send(appointment)
    } catch (err) {
      errorResponse(err, response)
    }
  }
  delete = async ({ params }: Request, response: Response) => {
    try {
      const repository = getAppointmentFirebaseRepository()
      const useCase = getAppointmentUseCase(repository)
      await useCase.delete(params.id)
      response.status(204).send()
    } catch (err) {
      errorResponse(err, response)
    }
  }
}