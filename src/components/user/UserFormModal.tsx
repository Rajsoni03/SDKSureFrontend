import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { RoleEnum } from '@/services/api/generated/models/role-enum'
import type { User } from '@/services/api/generated/models/user'
import type { PatchedUser } from '@/services/api/generated/models/patched-user'
import { usersService } from '@/services/users'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingUser?: User | null
  canManage: boolean
}

export function UserFormModal({ isOpen, onClose, onSaved, editingUser, canManage }: Props) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState<RoleEnum>(RoleEnum.NORMAL_USER)
  const [isActive, setIsActive] = useState(true)
  const [password, setPassword] = useState('')
  const isEditing = !!editingUser

  useEffect(() => {
    if (editingUser) {
      setEmail(editingUser.email)
      setUsername(editingUser.username)
      setRole(editingUser.role ?? RoleEnum.NORMAL_USER)
      setIsActive(editingUser.is_active ?? true)
      setPassword('')
    } else {
      setEmail('')
      setUsername('')
      setRole(RoleEnum.NORMAL_USER)
      setIsActive(true)
      setPassword('')
    }
  }, [editingUser])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canManage) return

    const payload: PatchedUser & { password?: string } = {
      email,
      username,
      role,
      is_active: isActive,
    }
    if (password) payload.password = password

    await apiCall(
      () =>
        isEditing && editingUser
          ? usersService.update(editingUser.id, payload)
          : usersService.create(payload),
      {
        successMessage: isEditing ? 'User updated' : 'User created',
        errorMessage: 'User save failed',
      },
    )

    onSaved?.()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-lg rounded-2xl border theme-border theme-panel p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-400 hover:bg-white/5"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold theme-text">
            {isEditing ? 'Edit User' : 'Add User'}
          </h3>
          <p className="text-sm theme-muted">
            Only Admins and Super Admins can create or edit users.
          </p>
        </div>

        {!canManage && (
          <div className="mt-3 rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            You do not have permission to manage users.
          </div>
        )}

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <Field label="Email">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="user@example.com"
              disabled={!canManage}
            />
          </Field>
          <Field label="Username">
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="username"
              disabled={!canManage}
            />
          </Field>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Role">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as RoleEnum)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                disabled={!canManage}
              >
                <option value={RoleEnum.SUPER_ADMIN}>Super Administrator</option>
                <option value={RoleEnum.ADMIN}>Administrator</option>
                <option value={RoleEnum.NORMAL_USER}>Normal User</option>
              </select>
            </Field>
            <Field label="Active">
              <select
                value={isActive ? 'true' : 'false'}
                onChange={(e) => setIsActive(e.target.value === 'true')}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                disabled={!canManage}
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </Field>
          </div>

          <Field label="Password (optional)">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="Set or reset password"
              disabled={!canManage}
            />
          </Field>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!canManage}>
              {isEditing ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="theme-text">{label}</span>
      {children}
    </label>
  )
}
