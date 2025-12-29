import { Edit2, ShieldCheck } from 'lucide-react'
import type { User } from '@/services/api/generated/models/user'
import { RoleEnum } from '@/services/api/generated/models/role-enum'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface Props {
  user: User
  onEdit?: (user: User) => void
  canManage: boolean
}

const roleBadges: Record<RoleEnum, { label: string; className: string }> = {
  [RoleEnum.SUPER_ADMIN]: {
    label: 'Super Administrator',
    className: 'bg-purple-500/15 text-purple-200',
  },
  [RoleEnum.ADMIN]: { label: 'Administrator', className: 'bg-emerald-500/15 text-emerald-200' },
  [RoleEnum.NORMAL_USER]: { label: 'Normal User', className: 'bg-slate-500/15 text-slate-200' },
}

export function UserCard({ user, onEdit, canManage }: Props) {
  const badge = user.role ? roleBadges[user.role] : roleBadges[RoleEnum.NORMAL_USER]
  return (
    <div className="relative overflow-hidden rounded-2xl border theme-border theme-panel-soft p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-300">User</p>
            <h3 className="text-lg font-semibold theme-text">{user.email}</h3>
            <p className="text-xs theme-muted">Username: {user.username}</p>
          </div>
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold',
              badge.className,
            )}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            {badge.label}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs theme-muted">
          <span>Active: {user.is_active ? 'Yes' : 'No'}</span>
          <span>
            Last login:{' '}
            {user.last_login ? new Date(user.last_login).toLocaleString() : 'Never'}
          </span>
        </div>
        {canManage && (
          <div className="flex justify-end">
            <Button variant="secondary" size="sm" className="gap-2" onClick={() => onEdit?.(user)}>
              <Edit2 className="h-4 w-4" />
              Edit
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
