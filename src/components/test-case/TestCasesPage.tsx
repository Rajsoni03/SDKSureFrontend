import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

import { useTestCases } from '@/hooks/useTestCases'
import { TestCaseCard } from './TestCaseCard'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'

export function TestCasesPage() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [page, setPage] = useState(1)

  const filters = useMemo(
    () => ({
      search: search || undefined,
      page,
      is_active: activeFilter === 'all' ? undefined : activeFilter === 'active',
      ordering: 'title',
    }),
    [search, page, activeFilter],
  )

  const { data, isLoading, isError, refetch, isFetching } = useTestCases(filters)
  const cases = data?.results ?? []

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Library</p>
          <h2 className="text-2xl font-semibold theme-text">Test Cases</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            onClick={() => apiCall(() => refetch(), { errorMessage: 'Failed to refresh test cases' })}
            disabled={isFetching}
          >
            {isFetching ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border theme-border theme-panel-soft p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-lg border theme-border bg-[var(--panel)] px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="Search test cases"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              className="w-full bg-transparent text-sm theme-text placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs theme-muted">Status</label>
            <select
              value={activeFilter}
              onChange={(e) => {
                setActiveFilter(e.target.value)
                setPage(1)
              }}
              className="rounded-lg border theme-border bg-[var(--panel)] px-3 py-2 text-sm theme-text focus:outline-none"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {isError && (
          <div className="rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            Failed to load test cases.
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-40 animate-pulse rounded-2xl border theme-border bg-panel-soft" />
            ))}
          </div>
        ) : cases.length === 0 ? (
          <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
            No test cases found.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cases.map((testCase) => (
              <TestCaseCard key={testCase.id} testCase={testCase} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
