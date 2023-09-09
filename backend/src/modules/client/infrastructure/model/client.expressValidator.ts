import { body, param } from 'express-validator'

export const createClientExpressValidator = [
  body('name').isString().isLength({ min: 3, max: 20 }),
  body('description').optional().isLength({ min: 3, max: 500 }),
  body('phone').optional().isMobilePhone('any'),
  body('email').optional().isEmail(),
  body('address').optional().isString().isLength({ min: 4, max: 2000 }),
]

export const updateClientExpressValidator = [
  param('id').isString(),
  body('name').optional().isString().isLength({ min: 3, max: 20 }),
  body('description').optional().isLength({ min: 3, max: 500 }),
  body('phone').optional().isMobilePhone('any'),
  body('email').optional().isEmail(),
  body('address').optional().isString().isLength({ min: 4, max: 2000 }),
]