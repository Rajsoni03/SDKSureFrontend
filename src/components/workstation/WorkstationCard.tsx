import { useState } from 'react'
import { Computer, Shield, Wifi, HardDrive, HeartPulse, Copy, RefreshCw } from 'lucide-react'
import type { Workstation } from '@/services/api/generated/models/workstation'
import { WorkstationstatusEnum } from '@/services/api/generated/models/workstationstatus-enum'
import { OsVersionEnum } from '@/services/api/generated/models/os-version-enum'
import { Button } from '../ui/button'
import { copyToClipboard } from '@/lib/clipboard'

const statusStyles: Record<WorkstationstatusEnum, { label: string; className: string }> = {
  [WorkstationstatusEnum.ONLINE]: { label: 'Online', className: 'bg-emerald-500/15 text-emerald-200' },
  [WorkstationstatusEnum.OFFLINE]: { label: 'Offline', className: 'bg-red-500/15 text-red-200' },
  [WorkstationstatusEnum.MAINTENANCE]: { label: 'Maintenance', className: 'bg-amber-500/15 text-amber-200' },
  [WorkstationstatusEnum.INITIALIZING]: { label: 'Initializing', className: 'bg-blue-500/15 text-blue-200' },
}

interface Props {
  pc: Workstation
  onEdit?: (pc: Workstation) => void
  onPing?: (id: string) => Promise<void>
  onUpdate?: (id: string) => Promise<void>
}

export function WorkstationCard({ pc, onEdit, onPing, onUpdate }: Props) {
  const [pinging, setPinging] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [tokenCopied, setTokenCopied] = useState(false)
  const status = pc.status ? statusStyles[pc.status] : statusStyles[WorkstationstatusEnum.OFFLINE]

  const handleCopyToken = () => {
    if (!pc.auth_token) return
    copyToClipboard(pc.auth_token, 'Auth token copied!').then(() => {
      setTokenCopied(true)
      setTimeout(() => setTokenCopied(false), 2000)
    })
  }

  const handlePing = async () => {
    if (!onPing || pinging) return
    setPinging(true)
    try {
      await onPing(pc.id)
    } finally {
      setPinging(false)
    }
  }

  const handleUpdate = async () => {
    if (!onUpdate || updating) return
    setUpdating(true)
    try {
      await onUpdate(pc.id)
    } finally {
      setUpdating(false)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Workstation</p>
            <h3 className="text-lg font-semibold theme-text">{pc.hostname}</h3>
            <p className="text-xs theme-muted">{pc.domain_name ?? 'No domain'}</p>
            {pc.sysconn_version && (
              <p className="mt-0.5 text-xs text-blue-300/80">
                SysConn {pc.sysconn_version}
                {pc.sysconn_commit && (
                  <span className="ml-1.5 font-mono text-slate-400">({pc.sysconn_commit})</span>
                )}
              </p>
            )}
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
          >
            <Shield className="h-3.5 w-3.5" />
            {status.label}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <Info label="IP" value={pc.ip_address} icon={<Wifi className="h-4 w-4 text-emerald-300" />} />
          <Info
            label="OS"
            value={pc.os_version ? prettyOs(pc.os_version) : '—'}
            icon={<Computer className="h-4 w-4 text-emerald-300" />}
          />
          <Info
            label="Disk"
            value={pc.disk_mountpoint ?? '—'}
            icon={<HardDrive className="h-4 w-4 text-emerald-300" />}
          />
          <Info
            label="Location"
            value={pc.location ?? '—'}
            icon={<Shield className="h-4 w-4 text-emerald-300" />}
          />
        </div>

        <div className="space-y-2">
          {/* System stats */}
          <div className="grid grid-cols-4 gap-2">
            <Stat label="CPU" value={pc.cpu_utilization != null ? `${pc.cpu_utilization}%` : '—'} warn={Number(pc.cpu_utilization) >= 80} />
            <Stat label="RAM" value={pc.ram_utilization != null ? `${pc.ram_utilization}%` : '—'} warn={Number(pc.ram_utilization) >= 80} />
            <Stat label="Disk" value={pc.disk_utilization != null ? `${pc.disk_utilization}%` : '—'} warn={Number(pc.disk_utilization) >= 90} />
            <Stat label="Docker" value={pc.docker_container_count != null ? String(pc.docker_container_count) : '—'} />
          </div>

          {/* Auth token */}
          {pc.auth_token && (
            <div className="flex items-center gap-2 rounded-lg border theme-border bg-black/5 px-3 py-2">
              <span className="text-xs theme-muted shrink-0">Token:</span>
              <span className="flex-1 truncate font-mono text-xs theme-text">{pc.auth_token}</span>
              <button
                type="button"
                title={tokenCopied ? 'Copied!' : 'Copy token'}
                onClick={handleCopyToken}
                className="shrink-0 text-slate-400 hover:text-emerald-300 transition"
              >
                <Copy className={`h-3.5 w-3.5 ${tokenCopied ? 'text-emerald-400' : ''}`} />
              </button>
            </div>
          )}

          <div className="text-xs theme-muted">
            Heartbeat:{' '}
            {pc.last_heartbeat_at ? new Date(pc.last_heartbeat_at).toLocaleString() : '—'}
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="gap-2"
              disabled={pinging}
              onClick={handlePing}
            >
              <HeartPulse className={`h-4 w-4 ${pinging ? 'animate-pulse text-emerald-400' : ''}`} />
              {pinging ? 'Checking...' : 'Check Health'}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="gap-2"
              disabled={updating}
              onClick={handleUpdate}
              title="Trigger SysConn self-update on this workstation"
            >
              <RefreshCw className={`h-4 w-4 ${updating ? 'animate-spin text-blue-400' : ''}`} />
              {updating ? 'Updating...' : 'Update SysConn'}
            </Button>
            <Button variant="secondary" size="sm" className="gap-2" onClick={() => onEdit?.(pc)}>
              Edit
            </Button>
          </div>
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

function Stat({ label, value, warn = false }: { label: string; value: string; warn?: boolean }) {
  return (
    <div className="rounded-lg border theme-border bg-black/5 px-2 py-1.5 text-center">
      <span className="block text-[10px] theme-muted uppercase tracking-wide">{label}</span>
      <span className={`block text-sm font-semibold ${warn ? 'text-amber-400' : 'theme-text'}`}>
        {value}
      </span>
    </div>
  )
}

function prettyOs(os: OsVersionEnum) {
  return os.replace(/_/g, ' ')
}
