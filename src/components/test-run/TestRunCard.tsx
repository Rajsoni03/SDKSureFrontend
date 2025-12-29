import { Clock3, Cpu, PlayCircle } from 'lucide-react'
import type { TestRun } from '@/services/api/generated/models/test-run'
import { TestRunStatusChip } from './TestRunStatusChip'
import { cn } from '@/lib/utils'

export function TestRunCard({ run }: { run: TestRun }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Test Run</p>
            <h3 className="text-lg font-semibold theme-text">#{run.id}</h3>
            <p className="text-xs theme-muted">Test case: {run.test_case}</p>
          </div>
          <TestRunStatusChip status={run.status} />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs theme-muted">
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Cpu className="h-3.5 w-3.5 text-emerald-300" />
            Board {run.board}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <PlayCircle className="h-3.5 w-3.5 text-emerald-300" />
            Started: {run.started_at ? new Date(run.started_at).toLocaleString() : '—'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Clock3 className="h-3.5 w-3.5 text-emerald-300" />
            Finished: {run.finished_at ? new Date(run.finished_at).toLocaleString() : '—'}
          </span>
        </div>
      </div>
    </div>
  )
}
