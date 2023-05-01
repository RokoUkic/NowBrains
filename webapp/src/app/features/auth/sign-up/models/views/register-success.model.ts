import { UserModel } from '../../../models/views/user.model'

export interface RegisterSuccessModel {
  accessToken: string
  refreshToken: string
  user: UserModel
}
