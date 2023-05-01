import jwt from 'jsonwebtoken'

export const generateToken = (username: string) => {
  try {
    const payload = { username }

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '0.5m',
    })

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '7d',
    })

    // TODO: save token to the user object in DB

    return { accessToken, refreshToken }
  } catch (err) {
    return err
  }
}
