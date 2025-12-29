import type { TestRunStatusEnum } from '@/services/api/generated/models/test-run-status-enum'
import { cn } from '@/lib/utils'

const styles: Record<TestRunStatusEnum, { bg: string; text: string; label: string }> = {
  PENDING: { bg: 'bg-slate-500/10', text: 'text-slate-200', label: 'Pending' },
  RUNNING: { bg: 'bg-emerald-500/10', text: 'text-emerald-200', label: 'Running' },
  PAUSED: { bg: 'bg-amber-500/10', text: 'text-amber-200', label: 'Paused' },
  COMPLETED: { bg: 'bg-blue-500/10', text: 'text-blue-200', label: 'Completed' },
  FAILED: { bg: 'bg-red-500/10', text: 'text-red-200', label: 'Failed' },
  KILLED: { bg: 'bg-red-500/15', text: 'text-red-200', label: 'Killed' },
}

export function TestRunStatusChip({ status }: { status?: TestRunStatusEnum }) {
  if (!status) return null
  const s = styles[status] ?? styles.PENDING
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold',
        s.bg,
        s.text,
      )}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {s.label}
    </span>
  )
}
