import mongoose from 'mongoose'

export interface IUser {
  _id: string
  username: string
  hashPassword: string
  createdDate: Date
  refreshToken: string
  userLevel: string
}

const userSchema = new mongoose.Schema<IUser>({
  _id: {
    type: String,
  },
  refreshToken: {
    type: String,
    require: true,
  },
  createdDate: {
    type: Date,
  },
  userLevel: {
    type: String,
    require: true,
  },
  hashPassword: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    index: true,
  },
})

export const User = mongoose.model<IUser>('user', userSchema)
