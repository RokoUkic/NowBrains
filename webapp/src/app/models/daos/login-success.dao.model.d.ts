interface LoginSuccessDAOModel {
  accessToken: string;
  refreshToken: string;
  user: UserDAOModel;
}
