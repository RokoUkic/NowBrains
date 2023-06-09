import { REFRESH_TOKEN_SECRET } from '@configs/config'
import { ERROR_MESSAGE } from '@constants/error-message.constant'
import { REFRESH_TOKEN_KEY } from '@constants/user-key-storage.constant'
import { generateToken } from '@utils/generate-token.util'
import { APP_RESPONSE } from '@utils/response.util'
import { UserUtils } from '@utils/user.util'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return APP_RESPONSE.badRequest(res, ERROR_MESSAGE.MISSING_REQUIRED_FIELDS)
    }

    try {
      const hashPassword = await UserUtils.findHashPassword(username)

      bcrypt.compare(password, hashPassword, async (err, result) => {
        if (result) {
          const user = await UserUtils.findOne({ username })
          const { accessToken, refreshToken } = generateToken(username)

          UserUtils.updateOne({ username }, { refreshToken })

          return APP_RESPONSE.success(res, {
            accessToken,
            refreshToken,
            user,
          })
        } else {
          return APP_RESPONSE.conflict(res, ERROR_MESSAGE.PASSWORD_IS_NOT_CORRECT)
        }
      })
    } catch (err) {
      throw new Error(ERROR_MESSAGE.CONFLICT)
    }
  } catch (error) {
    if (error.message === ERROR_MESSAGE.CONFLICT) {
      return APP_RESPONSE.conflict(res, error.message)
    } else {
      return APP_RESPONSE.internalServerError(res, error.message)
    }
  }
}

export const register = async (req: Request, res: Response) => {
  const { username, password, userLevel } = req.body

  if (!username || !password || !userLevel) {
    return APP_RESPONSE.badRequest(res, ERROR_MESSAGE.MISSING_REQUIRED_FIELDS)
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hashPassword) => {
      try {
        const { accessToken, refreshToken } = generateToken(username)

        await UserUtils.create({
          username,
          userLevel,
          refreshToken,
          hashPassword,
        })

        const user = await UserUtils.findOne({ username })

        return APP_RESPONSE.success(res, {
          accessToken,
          refreshToken,
          user,
        })
      } catch (error) {
        return APP_RESPONSE.conflict(res, error.message)
      }
    })
  })
}

export const retrieveAccessToken = (req: Request, res: Response) => {
  const refreshToken = req.headers[REFRESH_TOKEN_KEY]

  try {
    const decodedRefreshToken = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET)
    const { username } = decodedRefreshToken

    try {
      const { accessToken, refreshToken: newRefreshToken } = generateToken(username)

      UserUtils.updateOne({ username }, { refreshToken: newRefreshToken })

      return APP_RESPONSE.success(res, {
        accessToken,
        refreshToken: newRefreshToken,
      })
    } catch (error) {
      return APP_RESPONSE.internalServerError(res, error.message)
    }
  } catch (error) {
    return APP_RESPONSE.unauthorized(res, ERROR_MESSAGE.UNAUTHORIZED)
  }
}
