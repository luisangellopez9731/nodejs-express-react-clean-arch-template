import { Response } from "express";

export const errorResponse = (err: any, response: Response, status?: number) => {
  const error = err.message || err.toString() || err
  response.status(status || 500).send({ error: error })
}