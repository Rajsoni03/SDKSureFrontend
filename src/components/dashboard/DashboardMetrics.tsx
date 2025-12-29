import { AlertCircle, Loader2, RefreshCw, TrendingUp } from 'lucide-react'
import { useDashboardMetrics } from '@/hooks/useDashboardMetrics'
import { cn } from '@/lib/utils'
import { apiCall } from '@/lib/apiHandler'

function formatValue(value: unknown): string {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'number') return value.toLocaleString()
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

export function DashboardMetrics() {
  const { data, isLoading, isError, refetch, isFetching } = useDashboardMetrics()

  if (isError) {
    return (
      <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-100">
        <div className="flex items-center gap-2 font-semibold">
          <AlertCircle className="h-4 w-4" />
          Failed to load metrics
        </div>
        <p className="mt-1 text-red-200/80">Check API connectivity and try again.</p>
      </div>
    )
  }

  const metrics = data ?? []

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Dashboard</p>
          <h2 className="text-xl font-semibold theme-text">Live metrics</h2>
        </div>
        <button
          type="button"
          onClick={() =>
            apiCall(() => refetch(), {
              errorMessage: 'Refresh failed',
            })
          }
          className="inline-flex items-center gap-2 rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-emerald-400/40 hover:text-white"
        >
          {isFetching ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
          Refresh
        </button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="h-28 animate-pulse rounded-2xl border theme-border theme-panel-soft"
            />
          ))}
        </div>
      ) : metrics.length === 0 ? (
        <div className="rounded-xl border theme-border theme-panel-soft p-4 text-sm text-slate-200">
          No metrics available yet.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-5 transition hover:-translate-y-0.5 hover:border-emerald-400/40 hover:shadow-[var(--shadow)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">
                    {metric.key}
                  </p>
                <p
                    className={cn(
                      'text-2xl font-semibold theme-text',
                      typeof metric.value === 'number' && 'tabular-nums',
                    )}
                  >
                    {formatValue(metric.value)}
                  </p>
                  <p className="text-xs text-slate-400">
                    Refreshed {new Date(metric.refreshed_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-emerald-300">
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
