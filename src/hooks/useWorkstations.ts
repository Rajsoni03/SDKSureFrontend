import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { workstationsService } from '@/services/workstations'

export interface WorkstationFilters {
  search?: string
  ordering?: string
  page?: number
  status?: string
}

export function useWorkstations(filters: WorkstationFilters) {
  return useQuery({
    queryKey: ['workstations', filters],
    queryFn: () => workstationsService.list(filters).then((res) => res.data),
    placeholderData: keepPreviousData,
    staleTime: 10_000,
  })
}
