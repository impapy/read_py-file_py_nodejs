import { Router } from 'express'
import TestPyRoutes from './modules/testPy/routesTest'

const routes = Router()
routes.use('/test', TestPyRoutes)

export default routes
