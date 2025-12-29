import { HardDrive, RefreshCw, Timer } from 'lucide-react'
import type { Board } from '@/services/api/generated/models/board'
import { BoardStatusChip } from './BoardStatusChip'
import { cn } from '@/lib/utils'

interface Props {
  board: Board
}

export function BoardCard({ board }: Props) {
  const capCount = board.capabilities?.length ?? 0
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Board</p>
            <h3 className="text-lg font-semibold theme-text">{board.name}</h3>
            <p className="text-xs theme-muted">Serial: {board.serial_number}</p>
          </div>
          <BoardStatusChip status={board.status} />
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <InfoRow label="UART" value={`${board.uart_port} · ${board.baud_rate ?? 'N/A'}`} />
          <InfoRow label="Data bits" value={board.data_bits ?? '—'} />
          <InfoRow label="Stop bits" value={board.stop_bits ?? '—'} />
          <InfoRow label="Parity" value={board.parity ?? '—'} />
        </div>

        <div className="flex items-center gap-3 text-xs theme-muted">
          <span className="inline-flex items-center gap-2 rounded-lg border theme-border px-2 py-1">
            <HardDrive className="h-3.5 w-3.5 text-emerald-300" />
            {capCount} capabilities
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Timer className="h-3.5 w-3.5 text-emerald-300" />
            Last seen: {board.last_seen_at ? new Date(board.last_seen_at).toLocaleString() : '—'}
          </span>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between rounded-lg border theme-border bg-black/5 px-3 py-2">
      <span className="text-xs theme-muted">{label}</span>
      <span className={cn('text-sm font-medium theme-text', typeof value === 'number' && 'tabular-nums')}>
        {value}
      </span>
    </div>
  )
}
