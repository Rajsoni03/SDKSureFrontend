import { cn } from '@/lib/utils'
import type { BoardStatusEnum } from '@/services/api/generated/models/board-status-enum'

const statusStyles: Record<
  BoardStatusEnum,
  { bg: string; text: string; dot: string; label: string }
> = {
  CONNECTED: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-200',
    dot: 'bg-emerald-400',
    label: 'Connected',
  },
  DISCONNECTED: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-200',
    dot: 'bg-amber-400',
    label: 'Disconnected',
  },
  OFFLINE: {
    bg: 'bg-slate-500/10',
    text: 'text-slate-200',
    dot: 'bg-slate-400',
    label: 'Offline',
  },
  ERROR: {
    bg: 'bg-red-500/10',
    text: 'text-red-200',
    dot: 'bg-red-400',
    label: 'Error',
  },
}

interface Props {
  status: BoardStatusEnum
}

export function BoardStatusChip({ status }: Props) {
  const styles = statusStyles[status] ?? statusStyles.OFFLINE
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
        styles.bg,
        styles.text,
      )}
    >
      <span className={cn('h-2 w-2 rounded-full', styles.dot)} />
      {styles.label}
    </span>
  )
}
