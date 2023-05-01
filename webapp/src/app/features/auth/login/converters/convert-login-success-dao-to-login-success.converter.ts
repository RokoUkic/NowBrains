import { LoginSuccessModel } from '../models/views/login-success.model'

export function convertLoginSuccessDAOToLoginSuccess(
  model: LoginSuccessDAOModel,
): LoginSuccessModel {
  return {
    accessToken: model.accessToken,
    refreshToken: model.refreshToken,
    user: {
      id: model.user._id,
      userLevel: model.user.userLevel,
      username: model.user.username,
      createdDate: model.user.createdDate,
    },
  }
}
