import { Response } from 'express'

const badRequest = (res: Response, message: string) => {
  return res.status(400).json({
    status: 'fail',
    error: message,
  })
}

const internalServerError = (res: Response, message = 'Internal server error') => {
  return res.status(500).json({
    status: 'fail',
    error: message,
  })
}

const unauthorized = (res: Response, message: string) => {
  return res.status(401).json({
    status: 'fail',
    error: message,
  })
}

const success = (res: Response, data: unknown) => {
  return res.status(200).json({
    status: 'success',
    data,
  })
}

export const APP_RESPONSE = {
  success,
  badRequest,
  internalServerError,
  unauthorized,
}
