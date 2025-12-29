import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

import { useUsers } from '@/hooks/useUsers'
import { UserCard } from './UserCard'
import { UserFormModal } from './UserFormModal'
import { useAuthStore } from '@/store/authStore'
import { RoleEnum } from '@/services/api/generated/models/role-enum'
import { Button } from '../ui/button'
import { apiCall } from '@/lib/apiHandler'

export function UsersPage() {
  const { user: currentUser } = useAuthStore()
  const canManage =
    currentUser?.role === RoleEnum.ADMIN || currentUser?.role === RoleEnum.SUPER_ADMIN

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState<any | null>(null)

  const filters = useMemo(
    () => ({
      search: search || undefined,
      page,
      ordering: '-last_login',
    }),
    [search, page],
  )

  const { data, isLoading, isError, refetch } = useUsers(filters)
  const users = data?.results ?? []

  const openCreate = () => {
    setEditingUser(null)
    setShowModal(true)
  }

  const openEdit = (user: any) => {
    setEditingUser(user)
    setShowModal(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Directory</p>
          <h2 className="text-2xl font-semibold theme-text">Users</h2>
          {!canManage && (
            <p className="text-sm text-amber-300/80">
              Only Admins and Super Admins can create or edit users.
            </p>
          )}
        </div>
        {canManage && (
          <div className="flex flex-wrap gap-3">
            <Button onClick={openCreate}>Add User</Button>
            <Button
              variant="secondary"
              onClick={() =>
                apiCall(() => refetch(), { errorMessage: 'Failed to refresh users' })
              }
            >
              Refresh
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border theme-border theme-panel-soft p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-lg border theme-border bg-[var(--panel)] px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="Search users by email or username"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              className="w-full bg-transparent text-sm theme-text placeholder:text-slate-500 focus:outline-none"
            />
          </div>
        </div>

        {isError && (
          <div className="rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            Failed to load users. Please check your connection.
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-36 animate-pulse rounded-2xl border theme-border bg-panel-soft" />
            ))}
          </div>
        ) : users.length === 0 ? (
          <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
            No users found.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} user={user} onEdit={openEdit} canManage={canManage} />
            ))}
          </div>
        )}
      </div>

      <UserFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaved={() => refetch()}
        editingUser={editingUser}
        canManage={canManage}
      />
    </div>
  )
}
