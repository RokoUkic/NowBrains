import { RegisterSuccessModel } from '../models/views/register-success.model'

export function convertRegisterSuccessDAOToRegisterSuccess(
  model: RegisterSuccessDAOModel,
): RegisterSuccessModel {
  return {
    accessToken: model.accessToken,
    refreshToken: model.refreshToken,
    user: {
      id: model.user._id,
      username: model.user.username,
      userLevel: model.user.userLevel,
      createdDate: model.user.createdDate,
    },
  }
}
