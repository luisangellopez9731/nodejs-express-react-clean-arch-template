import { Router } from 'express'
import ClientExpressController from '../controller'
import { createClientExpressValidator, updateClientExpressValidator } from '../model'

const clientController = new ClientExpressController()

const router = Router()
router.get('/', clientController.getAll)
router.get('/:id', clientController.get)
router.post('/', ...createClientExpressValidator, clientController.create)
router.patch('/:id', ...updateClientExpressValidator, clientController.update)
router.delete('/:id', clientController.delete)

export default router