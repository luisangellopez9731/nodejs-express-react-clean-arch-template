import { Request, Response } from 'express'
import { ClientUseCase } from '../../application/Client.useCase';
import { CrudExpressController } from 'modules/shared/CrudExpressController';
import { errorResponse } from 'modules/shared/errorResponse.express';
import { ClientFirebaseRepository } from '../repository/firebase.repository';
import { validationResult } from 'express-validator';
import { ClientRepository } from '../../domain';

const getClientFirebaseRepository = () => new ClientFirebaseRepository("clients")
const getClientUseCase = (clientRepo: ClientRepository<any>) => new ClientUseCase(clientRepo)

export class ClientExpressController implements CrudExpressController {
  constructor() { }

  getAll = async (req: Request, response: Response) => {
    try {
      const repository = getClientFirebaseRepository()
      const useCase = getClientUseCase(repository)
      const clients = await useCase.getAll()
      response.send(clients)
    } catch (err) {
      errorResponse(err, response)
    }

  }
  get = async ({ params }: Request, response: Response) => {
    try {
      const repository = getClientFirebaseRepository()
      const useCase = getClientUseCase(repository)
      const client = await useCase.get(params.id)
      response.send(client)
    } catch (err) {
      errorResponse(err, response)
    }
  }
  create = async (request: Request, response: Response) => {
    console.log(request.body)
    try {
      const errors = validationResult(request);
      console.log(errors)
      if (!errors.isEmpty()) {
        return response.status(400).send({ errors: errors.array() });
      }
      const repository = getClientFirebaseRepository()
      const useCase = getClientUseCase(repository)
      const client = await useCase.create(request.body)
      response.send(client)
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
      const repository = getClientFirebaseRepository()
      const useCase = getClientUseCase(repository)
      const client = await useCase.update(request.params.id, request.body)
      response.send(client)
    } catch (err) {
      errorResponse(err, response)
    }
  }
  delete = async ({ params }: Request, response: Response) => {
    try {
      const repository = getClientFirebaseRepository()
      const useCase = getClientUseCase(repository)
      await useCase.delete(params.id)
      response.status(204).send()
    } catch (err) {
      errorResponse(err, response)
    }
  }
}