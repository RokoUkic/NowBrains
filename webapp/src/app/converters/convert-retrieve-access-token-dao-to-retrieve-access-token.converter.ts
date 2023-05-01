export function convertRetrieveAccessTokenDAOToRetrieveAccessToken(
  it: RetrieveAccessTokenDAOModel,
): RetrieveAccessTokenModel {
  return {
    accessToken: it.accessToken,
    refreshToken: it.refreshToken,
  }
}
