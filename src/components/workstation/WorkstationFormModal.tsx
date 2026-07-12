import { useEffect, useState } from 'react'
import { Copy, RefreshCw, X } from 'lucide-react'
import type { Workstation } from '@/services/api/generated/models/workstation'
import { OsVersionEnum } from '@/services/api/generated/models/os-version-enum'
import { WorkstationstatusEnum } from '@/services/api/generated/models/workstationstatus-enum'
import { workstationsService } from '@/services/workstations'
import { apiCall } from '@/lib/apiHandler'
import { copyToClipboard } from '@/lib/clipboard'
import { Button } from '../ui/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSaved?: () => void
  editingPc?: Workstation | null
}

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function WorkstationFormModal({ isOpen, onClose, onSaved, editingPc }: Props) {
  const [hostname, setHostname] = useState('')
  const [ip, setIp] = useState('')
  const [domain, setDomain] = useState('')
  const [status, setStatus] = useState<WorkstationstatusEnum | ''>('')
  const [osVersion, setOsVersion] = useState<OsVersionEnum | ''>('')
  const [disk, setDisk] = useState('')
  const [location, setLocation] = useState('')
  const [comment, setComment] = useState('')
  const [authToken, setAuthToken] = useState('')
  const [copied, setCopied] = useState(false)
  const [saving, setSaving] = useState(false)

  const isEditing = !!editingPc

  useEffect(() => {
    if (editingPc) {
      setHostname(editingPc.hostname)
      setIp(editingPc.ip_address)
      setDomain(editingPc.domain_name ?? '')
      setStatus(editingPc.status ?? '')
      setOsVersion(editingPc.os_version ?? '')
      setDisk(editingPc.disk_mountpoint ?? '')
      setLocation(editingPc.location ?? '')
      setComment(editingPc.comment ?? '')
      setAuthToken(editingPc.auth_token ?? generateToken())
    } else {
      setHostname('')
      setIp('')
      setDomain('')
      setStatus('')
      setOsVersion('')
      setDisk('')
      setLocation('')
      setComment('')
      setAuthToken(generateToken())
    }
    setCopied(false)
  }, [editingPc, isOpen])

  if (!isOpen) return null

  const handleCopy = () => {
    copyToClipboard(authToken, 'Auth token copied!').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const payload = {
      hostname,
      ip_address: ip,
      domain_name: domain || undefined,
      status: status || WorkstationstatusEnum.ONLINE,
      os_version: osVersion || OsVersionEnum.ubuntu_22_04,
      disk_mountpoint: disk || undefined,
      location: location || undefined,
      comment: comment || undefined,
      auth_token: authToken,
    }
    try {
      await apiCall(
        () =>
          isEditing && editingPc
            ? workstationsService.update(editingPc.id, payload)
            : workstationsService.create(payload),
        {
          successMessage: isEditing ? 'Workstation updated' : 'Workstation created',
          errorMessage: 'Failed to save workstation',
        },
      )
      onSaved?.()
      onClose()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-xl overflow-y-auto max-h-[90vh] rounded-2xl border theme-border theme-panel p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-400 hover:bg-white/5"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold theme-text">{isEditing ? 'Edit Workstation' : 'Add Workstation'}</h3>
          <p className="text-sm theme-muted">Manage test PCs used for running tests.</p>
        </div>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Hostname">
              <input
                required
                value={hostname}
                onChange={(e) => setHostname(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="psdkhost01"
              />
            </Field>
            <Field label="IP Address">
              <input
                required
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="192.168.1.50"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Domain">
              <input
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="psdkhost01.dhcp.ti.com"
              />
            </Field>
            <Field label="Status">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as WorkstationstatusEnum)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {Object.values(WorkstationstatusEnum).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="OS Version">
              <select
                value={osVersion}
                onChange={(e) => setOsVersion(e.target.value as OsVersionEnum)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {Object.values(OsVersionEnum).map((v) => (
                  <option key={v} value={v}>{v.replace(/_/g, ' ')}</option>
                ))}
              </select>
            </Field>
            <Field label="Disk Mountpoint">
              <input
                value={disk}
                onChange={(e) => setDisk(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="/"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Location">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Test Farm 2A2F"
              />
            </Field>
            <Field label="Comment">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Notes"
              />
            </Field>
          </div>

          {/* Auth Token */}
          <Field label="Auth Token (SysConn)">
            <div className="flex items-center gap-2">
              <input
                value={authToken}
                onChange={(e) => setAuthToken(e.target.value)}
                className="min-w-0 flex-1 rounded-lg border theme-border theme-panel-soft px-3 py-2 font-mono text-xs theme-text focus:outline-none"
                placeholder="auto-generated"
                spellCheck={false}
              />
              <button
                type="button"
                title="Regenerate token"
                onClick={() => setAuthToken(generateToken())}
                className="flex-shrink-0 rounded-lg border theme-border bg-[var(--panel-soft)] p-2 text-slate-400 transition hover:text-emerald-300"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                type="button"
                title={copied ? 'Copied!' : 'Copy token'}
                onClick={handleCopy}
                className="flex-shrink-0 rounded-lg border theme-border bg-[var(--panel-soft)] p-2 transition hover:text-emerald-300"
              >
                <Copy className={`h-4 w-4 ${copied ? 'text-emerald-400' : 'text-slate-400'}`} />
              </button>
            </div>
            <p className="text-xs theme-muted">
              {isEditing
                ? 'Changing this token requires updating SysConn on the workstation.'
                : 'Auto-generated — copy and configure this on the workstation before saving.'}
            </p>
          </Field>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? 'Saving...' : isEditing ? 'Update' : 'Create'}
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
