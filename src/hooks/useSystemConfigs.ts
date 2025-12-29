import { useQuery } from '@tanstack/react-query'
import { systemConfigurationsService } from '@/services/systemConfigurations'

export function useSystemConfigs() {
  return useQuery({
    queryKey: ['system-configurations'],
    queryFn: () => systemConfigurationsService.list().then((res) => res.data),
    staleTime: 15_000,
  })
}
