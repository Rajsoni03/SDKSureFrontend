import { Edit2 } from 'lucide-react'
import type { SystemConfiguration } from '@/services/api/generated/models/system-configuration'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface Props {
  config: SystemConfiguration
  onEdit?: (config: SystemConfiguration) => void
  canManage: boolean
}

export function SystemConfigCard({ config, onEdit, canManage }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">Config</p>
            <h3 className="text-lg font-semibold theme-text">{config.key}</h3>
            {config.description && <p className="text-xs theme-muted">{config.description}</p>}
          </div>
          {canManage && (
            <Button variant="secondary" size="sm" className="gap-2" onClick={() => onEdit?.(config)}>
              <Edit2 className="h-4 w-4" />
              Edit
            </Button>
          )}
        </div>
        <div className="rounded-lg border theme-border bg-black/5 px-3 py-2">
          <p className={cn('text-sm theme-text break-words')}>
            {typeof config.value === 'object' ? JSON.stringify(config.value) : String(config.value ?? '—')}
          </p>
        </div>
        <p className="text-xs theme-muted">
          Updated: {config.updated_at ? new Date(config.updated_at).toLocaleString() : '—'}
        </p>
      </div>
    </div>
  )
}
