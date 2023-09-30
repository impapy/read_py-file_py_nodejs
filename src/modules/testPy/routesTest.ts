import { Router } from 'express'
import * as controller from './controllersTest'

const routes = Router()

routes.get('/:_id', controller.testPy)

export default routes
