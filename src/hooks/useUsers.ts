import { useQuery } from '@tanstack/react-query'
import { usersService } from '@/services/users'

export interface UserFilters {
  search?: string
  ordering?: string
  page?: number
}

export function useUsers(filters: UserFilters) {
  return useQuery({
    queryKey: ['users', filters],
    queryFn: () => usersService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
