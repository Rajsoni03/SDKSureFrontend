import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import type { SystemConfiguration } from '@/services/api/generated/models/system-configuration'
import { systemConfigurationsService } from '@/services/systemConfigurations'
import { apiCall } from '@/lib/apiHandler'
import { Button } from '../ui/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingConfig?: SystemConfiguration | null
  canManage: boolean
}

export function SystemConfigModal({ isOpen, onClose, onSaved, editingConfig, canManage }: Props) {
  const [keyVal, setKeyVal] = useState('')
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')
  const isEditing = !!editingConfig

  useEffect(() => {
    if (editingConfig) {
      setKeyVal(editingConfig.key)
      setValue(
        editingConfig.value !== undefined && editingConfig.value !== null
          ? typeof editingConfig.value === 'object'
            ? JSON.stringify(editingConfig.value)
            : String(editingConfig.value)
          : '',
      )
      setDescription(editingConfig.description ?? '')
    } else {
      setKeyVal('')
      setValue('')
      setDescription('')
    }
  }, [editingConfig])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canManage) return

    const payload: any = {
      key: keyVal,
      description: description || undefined,
    }

    try {
      payload.value = value ? JSON.parse(value) : ''
    } catch {
      payload.value = value
    }

    await apiCall(
      () =>
        isEditing && editingConfig
          ? systemConfigurationsService.update(editingConfig.id, payload)
          : systemConfigurationsService.create(payload),
      {
        successMessage: isEditing ? 'Configuration updated' : 'Configuration added',
        errorMessage: 'Failed to save configuration',
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
            {isEditing ? 'Edit Configuration' : 'Add Configuration'}
          </h3>
          <p className="text-sm theme-muted">Manage system-wide configuration values.</p>
        </div>

        {!canManage && (
          <div className="mt-3 rounded-lg border theme-border bg-red-500/10 p-3 text-sm text-red-100">
            You do not have permission to manage configurations.
          </div>
        )}

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <Field label="Key">
            <input
              required
              value={keyVal}
              onChange={(e) => setKeyVal(e.target.value)}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="config.key"
              disabled={isEditing || !canManage}
            />
          </Field>
          <Field label="Value (JSON or text)">
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={3}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder='e.g. {"enabled": true}'
              disabled={!canManage}
            />
          </Field>
          <Field label="Description">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              placeholder="Optional description"
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="theme-text">{label}</span>
      {children}
    </label>
  )
}
