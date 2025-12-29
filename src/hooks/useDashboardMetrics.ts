import { useQuery } from '@tanstack/react-query'
import { dashboardMetricsService } from '@/services/dashboardMetrics'

export function useDashboardMetrics() {
  return useQuery({
    queryKey: ['dashboard-metrics'],
    queryFn: () => dashboardMetricsService.list().then((res) => res.data.results),
    staleTime: 15_000,
  })
}
