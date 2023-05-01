import { Router } from 'express'

import authRouter from './routes/auth.route'

export const routes = (router: Router) => {
  router.use('/', authRouter)
}
