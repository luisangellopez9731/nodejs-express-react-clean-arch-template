import { body, param, check } from 'express-validator'

export const createAppointmentExpressValidator = [
  body('date').isISO8601(),
  body('description').optional().isLength({ min: 3, max: 500 }),
  body('clientId').isString(),
  check('services.*.id').isString(),
  check('services.*.price').isNumeric().isLength({ min: 0, max: 2000000 }),
  check('services.*.description').isString().optional(),
]

export const updateAppointmentExpressValidator = [
  param('id').isString(),
  body('date').isISO8601(),
  body('description').optional().isLength({ min: 3, max: 500 }),
  body('clientId').isString(),
  check('services.*.id').isString(),
  check('services.*.price').isNumeric().isLength({ min: 0, max: 2000000 }),
  check('services.*.description').isString().optional(),
]