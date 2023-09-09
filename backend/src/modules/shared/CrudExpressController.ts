import { Request, Response } from "express"

export interface CrudExpressController {
  getAll(req: Request, response: Response): void
  get(req: Request, response: Response): void
  create(req: Request, response: Response): void
  update(req: Request, response: Response): void
  delete(req: Request, response: Response): void
}