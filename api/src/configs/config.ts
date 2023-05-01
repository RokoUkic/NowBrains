import dotenv from 'dotenv'
dotenv.config()

export const MONGO_IP = process.env.MONGO_IP
export const MONGO_PORT: number = parseInt(process.env.MONGO_PORT) || 27017
export const MONGO_USER = process.env.MONGO_USER
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD
export const MONGO_URL = process.env.MONGO_URL
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
