import { Cpu, Edit2, Globe2, HardDrive, MonitorSmartphone, Plug, Shield, Timer } from 'lucide-react'
import type { Board } from '@/services/api/generated/models/board'
import { BoardStatusChip } from './BoardStatusChip'
import { Button } from '../ui/button'

interface Props {
  board: Board
  onEdit?: (board: Board) => void
}

export function BoardCard({ board, onEdit }: Props) {
  const capCount = board.capabilities?.length ?? 0
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Board</p>
            <h3 className="text-lg font-semibold theme-text">{board.name}</h3>
            <p className="text-xs theme-muted">Serial: {board.hardware_serial_number}</p>
            <p className="text-xs theme-muted">
              Platform: {board.platform ?? '—'}-{board.device_type?.toLowerCase() ?? '—'} · Project: {board.project ?? '—'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BoardStatusChip status={board.status} />
            {onEdit && (
              <Button variant="secondary" size="sm" className="gap-2" onClick={() => onEdit(board)}>
                <Edit2 className="h-4 w-4" />
                Edit
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <Info
            label="Workstation"
            value={board.workstation?.hostname ?? board.workstation_id ?? '—'}
            icon={<MonitorSmartphone className="h-4 w-4 text-emerald-300" />}
          /> 
          <Info
            label="IP Address"
            value={board.board_ip ?? '—'}
            icon={<Globe2 className="h-4 w-4 text-emerald-300" />}
          />
          <Info
            label="Relay"
            value={
              (board.relay
                ? `${board.relay.relay_name} - #${board.relay_number ?? '—'}`
                : board.relay_id) ?? '—'
            }
            icon={<Plug className="h-4 w-4 text-emerald-300" />}
          />
          <Info
            label="SDK Version"
            value={board.sdk_version ?? '—'}
            icon={<Shield className="h-4 w-4 text-emerald-300" />}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs theme-muted">
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Cpu className="h-3.5 w-3.5 text-emerald-300" />
            Test farm: {board.test_farm ?? '—'}
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border theme-border px-2 py-1">
            <HardDrive className="h-3.5 w-3.5 text-emerald-300" />
            {capCount} capabilities
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Timer className="h-3.5 w-3.5 text-emerald-300" />
            Last heartbeat: {board.last_heartbeat_at ? new Date(board.last_heartbeat_at).toLocaleString() : '—'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg border theme-border px-2 py-1">
            <Shield className="h-3.5 w-3.5 text-emerald-300" />
            Healthy: {board.is_healthy ?? '—'}
          </span>
        </div>
      </div>
    </div>
  )
}

function Info({
  label,
  value,
  icon,
}: {
  label: string
  value: string | number | null
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border theme-border bg-black/5 px-3 py-2">
      {icon}
      <div className="flex flex-col">
        <span className="text-xs theme-muted">{label}</span>
        <span className="text-sm font-semibold theme-text">{value ?? '—'}</span>
      </div>
    </div>
  )
}