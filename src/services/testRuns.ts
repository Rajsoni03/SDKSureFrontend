import { TestRunsApiFactory } from './api/generated/apis/test-runs-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'

const testRunsApi = TestRunsApiFactory(apiConfiguration, undefined, apiClient)

export const testRunsService = {
  list: (params?: {
    status?: string
    ordering?: string
    page?: number
    search?: string
    board?: number
    test_case?: number
  }) => testRunsApi.testRunsList(params ?? {}),
  retrieve: (id: number) => testRunsApi.testRunsRetrieve({ id }),
}
