import { useQuery } from '@tanstack/react-query'
import { testCasesService } from '@/services/testCases'

export interface TestCaseFilters {
  search?: string
  ordering?: string
  page?: number
  is_active?: boolean
}

export function useTestCases(filters: TestCaseFilters) {
  return useQuery({
    queryKey: ['test-cases', filters],
    queryFn: () => testCasesService.list(filters).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 10_000,
  })
}
