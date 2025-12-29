import { DashboardMetricsApiFactory } from './api/generated/apis/dashboard-metrics-api'
import { apiConfiguration } from './api/config'
import { apiClient } from './api/client'

const dashboardApi = DashboardMetricsApiFactory(apiConfiguration, undefined, apiClient)

export const dashboardMetricsService = {
  list: (params?: { ordering?: string; page?: number; search?: string }) =>
    dashboardApi.dashboardMetricsList(params),
  retrieve: (id: number) => dashboardApi.dashboardMetricsRetrieve({ id }),
}
