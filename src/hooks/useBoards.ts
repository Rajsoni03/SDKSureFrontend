import { useQuery } from '@tanstack/react-query'
import { boardsService } from '@/services/boards'

export interface BoardFilters {
  search?: string
  status?: string
  page?: number
  ordering?: string
}

export function useBoards(filters: BoardFilters) {
  return useQuery({
    queryKey: ['boards', filters],
    queryFn: () => boardsService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
