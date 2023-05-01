import { v4 as uuidv4 } from 'uuid'

import { IUser, User } from '../models/user.model'

const create = async (data: {
  username: string
  hashPassword: string
  userLevel: string
  refreshToken: string
}): Promise<void> => {
  const id = uuidv4()
  const { username, hashPassword, userLevel, refreshToken } = data

  try {
    await User.create({
      _id: id,
      username,
      hashPassword,
      userLevel,
      refreshToken,
      createdDate: new Date(),
    })
  } catch (err) {
    throw new Error('Cannot create user')
  }
}

const findHashPassword = async (username: string): Promise<string> => {
  try {
    const user = await User.findOne({ username }).exec()

    if (!user) {
      throw new Error('Unauthorized')
    }

    return user.hashPassword
  } catch (error) {
    throw new Error(error)
  }
}

const findOne = async (condition: { username?: string; refreshToken?: string }): Promise<IUser> => {
  try {
    const user = await User.findOne(condition, { hashPassword: 0, __v: 0 }).exec()

    if (!user) {
      throw new Error('Not found')
    }

    return user
  } catch (error) {
    throw new Error(error)
  }
}

const updateOne = async (
  condition: { username?: string },
  updatedData: { refreshToken?: string },
): Promise<void> => {
  try {
    await User.updateOne(condition, updatedData)
  } catch (error) {
    throw new Error(error)
  }
}

export const UserUtils = { create, findHashPassword, findOne, updateOne }
