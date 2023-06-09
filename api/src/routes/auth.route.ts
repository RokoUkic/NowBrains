import { login, register, retrieveAccessToken } from '@controllers/auth.controller'
import { verifyAccessToken } from '@middleware/auth.middleware'
import express from 'express'

const authRouter = express.Router()

authRouter.post('/signin', login)
authRouter.post('/signup', register)
authRouter.get('/retrieve-access-token', retrieveAccessToken)

authRouter.get('/test', verifyAccessToken, (req, res) => {
  return res.json({})
})

export default authRouter
