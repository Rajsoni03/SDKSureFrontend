import { UsersApiFactory } from './api/generated/apis/users-api'
import { apiClient } from './api/client'
import { apiConfiguration } from './api/config'
import type { PatchedUser } from './api/generated/models/patched-user'
import type { User } from './api/generated/models/user'

const usersApi = UsersApiFactory(apiConfiguration, undefined, apiClient)

export const usersService = {
  list: (params?: { ordering?: string; page?: number; search?: string }) =>
    usersApi.usersList(params ?? {}),
  create: (user: Partial<User> & { password?: string }) =>
    usersApi.usersCreate({ ...(user as any) }),
  update: (id: number, payload: PatchedUser & { password?: string }) =>
    usersApi.usersPartialUpdate({ id, patchedUser: payload as any }),
  retrieve: (id: number) => usersApi.usersRetrieve({ id }),
}
