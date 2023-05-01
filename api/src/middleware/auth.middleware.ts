import { ACCESS_TOKEN_SECRET } from '@configs/config'
import { ERROR_MESSAGE } from '@constants/error-message.constant'
import { ERROR_NAME } from '@constants/error-name.constant'
import { ACCESS_TOKEN_KEY } from '@constants/user-key-storage.constant'
import { APP_RESPONSE } from '@utils/response.util'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const verifyAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers[ACCESS_TOKEN_KEY]

  if (!accessToken) {
    APP_RESPONSE.unauthorized(res, ERROR_MESSAGE.NO_ACCESS_TOKEN_FOUNDED)

    return
  }

  try {
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET)

    next()
  } catch (err) {
    if (err.name === ERROR_NAME.TokenExpired) {
      return APP_RESPONSE.expiredAccessToken(res)
    }

    APP_RESPONSE.unauthorized(res, ERROR_MESSAGE.UNAUTHORIZED)

    return
  }
}
