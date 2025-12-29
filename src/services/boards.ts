import { BoardsApiFactory } from './api/generated/apis/boards-api'
import { apiClient } from './api/client'
import { apiConfiguration } from './api/config'

const boardsApi = BoardsApiFactory(apiConfiguration, undefined, apiClient)

export const boardsService = {
  list: (params?: {
    ordering?: string
    page?: number
    search?: string
    status?: string
  }) => boardsApi.boardsList(params ?? {}),
  retrieve: (id: number) => boardsApi.boardsRetrieve({ id }),
  create: (board: any) => boardsApi.boardsCreate({ board }),
}
