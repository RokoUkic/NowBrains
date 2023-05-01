export function convertUserDAOToUser(model: UserDAOModel): UserDetailsModel {
  return {
    id: model._id,
    userLevel: model.userLevel,
    username: model.username,
    createdDate: model.createdDate,
  }
}
