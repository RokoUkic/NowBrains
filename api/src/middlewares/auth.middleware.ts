import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { ACCESS_TOKEN_SECRET } from '../configs/config'
import { generateToken } from '../utils/generate-token.util'
import { APP_RESPONSE } from '../utils/response.util'
import { UserUtils } from '../utils/user.util'

export const verifyAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers['st-access-token']

  if (!accessToken) {
    APP_RESPONSE.unauthorized(res, 'No access token founded')

    return
  }

  try {
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET)

    next()
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return APP_RESPONSE.expiredAccessToken(res)
    }

    APP_RESPONSE.unauthorized(res, 'Unauthorized')

    return
  }
}
