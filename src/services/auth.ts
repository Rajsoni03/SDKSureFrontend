import { AuthenticationApiFactory } from './api/generated/apis/authentication-api'
import type { TokenObtainPair, TokenRefresh } from './api/generated/models'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'

const authApi = AuthenticationApiFactory(apiConfiguration, undefined, apiClient)

export const authService = {
  login: (payload: Pick<TokenObtainPair, 'email' | 'password'>) =>
    authApi.authLoginCreate({
      tokenObtainPair: { ...payload, access: '', refresh: '' },
    }),
  refresh: (payload: TokenRefresh) =>
    authApi.authRefreshCreate({
      tokenRefresh: payload,
    }),
  me: () => authApi.authMeRetrieve(),
}
