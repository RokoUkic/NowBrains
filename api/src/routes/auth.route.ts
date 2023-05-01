import express from 'express'

import { login, register, retrieveAccessToken } from '../controllers/auth.controller'

const authRouter = express.Router()

authRouter.post('/signin', login)
authRouter.post('/signup', register)
authRouter.get('/retrieve-access-token', retrieveAccessToken)

export default authRouter
