import { UserModel } from '../../../models/views/user.model'

export interface LoginSuccessModel {
  accessToken: string
  refreshToken: string
  user: UserModel
}
