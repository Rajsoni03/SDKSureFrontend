import { useState } from 'react'
import { Button } from '../ui/button'
import { useSystemConfigs } from '@/hooks/useSystemConfigs'
import { SystemConfigCard } from './SystemConfigCard'
import { SystemConfigModal } from './SystemConfigModal'
import { useAuthStore } from '@/store/authStore'
import { RoleEnum } from '@/services/api/generated/models/role-enum'
import { apiCall } from '@/lib/apiHandler'

export function SystemConfigsPage() {
  const { user } = useAuthStore()
  const canManage =
    user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.SUPER_ADMIN

  const { data, isLoading, isError, refetch } = useSystemConfigs()
  const configs = data?.results ?? []

  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<any | null>(null)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">System</p>
          <h2 className="text-2xl font-semibold theme-text">Configuration</h2>
          {!canManage && (
            <p className="text-sm text-amber-300/80">
              Only Admins and Super Admins can change configuration.
            </p>
          )}
        </div>
        {canManage && (
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => {
              setEditing(null)
              setShowModal(true)
            }}>Add Configuration</Button>
            <Button
              variant="secondary"
              onClick={() =>
                apiCall(() => refetch(), { errorMessage: 'Failed to refresh configurations' })
              }
            >
              Refresh
            </Button>
          </div>
        )}
      </div>

      {isError && (
        <div className="rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
          Failed to load system configurations.
        </div>
      )}

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="h-36 animate-pulse rounded-2xl border theme-border bg-panel-soft" />
          ))}
        </div>
      ) : configs.length === 0 ? (
        <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
          No configurations found.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {configs.map((cfg) => (
            <SystemConfigCard
              key={cfg.id}
              config={cfg}
              canManage={canManage}
              onEdit={(c) => {
                setEditing(c)
                setShowModal(true)
              }}
            />
          ))}
        </div>
      )}

      <SystemConfigModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaved={() => refetch()}
        editingConfig={editing}
        canManage={canManage}
      />
    </div>
  )
}
