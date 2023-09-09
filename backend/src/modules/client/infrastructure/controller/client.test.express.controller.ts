import { Request, Response } from 'express'
import { ClientUseCase } from '../../application/Client.useCase';
import { CrudExpressController } from 'modules/shared/CrudExpressController';
import { errorResponse } from 'modules/shared/errorResponse.express';
import { ClientFirebaseRepository } from '../repository/firebase.repository';
import { validationResult } from 'express-validator';
import { ClientRepository } from '../../domain';

export class ClientTestExpressController implements CrudExpressController {
  constructor() { }

  getAll = async (req: Request, response: Response) => {
    try {
      response.send([
        {
          appointmentsId: [],
          createdDate: "2022-11-13T15:03:36.680Z",
          id: "0d2564e6-548b-42e3-983b-a4e19fa8be69",
          name: "Test",
          updatedDate: "2022-11-13T15:03:36.680Z"
        },
        {
          appointmentsId: [],
          createdDate: "2022-11-13T15:03:36.680Z",
          id: "0d2564e6-548b-42e3-983b-a4e19fa8be09",
          name: "Test",
          updatedDate: "2022-11-13T15:03:36.680Z"
        },
        {
          appointmentsId: [],
          createdDate: "2022-11-13T15:03:36.680Z",
          id: "0d2564e6-548b-42e3-923b-a4e19fa8be69",
          name: "Test",
          updatedDate: "2022-11-13T15:03:36.680Z"
        },
        {
          appointmentsId: [],
          createdDate: "2022-11-13T15:03:36.680Z",
          id: "0d2564e6-548b-43e3-983b-a4e19fa8be69",
          name: "Test",
          updatedDate: "2022-11-13T15:03:36.680Z"
        }
      ])
    } catch (err) {
      errorResponse(err, response)
    }

  }
  get = async ({ params }: Request, response: Response) => {

  }
  create = async (request: Request, response: Response) => {


  }
  async update(request: Request, response: Response) {

  }
  delete = async ({ params }: Request, response: Response) => {

  }
}