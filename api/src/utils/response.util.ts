import { Response } from 'express'

import { HttpStatusCode } from '../constants/http-status-code.constant'

const badRequest = (res: Response, message: string) => {
  return res.status(HttpStatusCode.BadRequest).json({
    status: 'fail',
    message,
  })
}

const internalServerError = (res: Response, message = 'Internal server error') => {
  return res.status(HttpStatusCode.InternalServerError).json({
    status: 'fail',
    message,
  })
}

const unauthorized = (res: Response, message: string) => {
  return res.status(HttpStatusCode.Unauthorized).json({
    status: 'fail',
    message,
  })
}

const expiredAccessToken = (res: Response) => {
  return res.status(HttpStatusCode.ExpiredToken).json({
    status: 'fail',
    message: 'Token is expired',
  })
}

const success = (res: Response, data: unknown) => {
  return res.status(HttpStatusCode.Success).json({
    status: 'success',
    data,
  })
}

const conflict = (res: Response, message: string) => {
  return res.status(HttpStatusCode.Conflict).json({
    status: 'fail',
    message,
  })
}

export const APP_RESPONSE = {
  success,
  badRequest,
  internalServerError,
  unauthorized,
  expiredAccessToken,
  conflict,
}
