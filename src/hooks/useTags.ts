import { useQuery } from '@tanstack/react-query'
import { tagsService } from '@/services/tags'

export interface TagFilters {
  search?: string
  ordering?: string
  page?: number
}

export function useTags(filters: TagFilters) {
  return useQuery({
    queryKey: ['tags', filters],
    queryFn: () => tagsService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 15_000,
  })
}
