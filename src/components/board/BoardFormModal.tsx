import { useState } from 'react'
import { X } from 'lucide-react'
import { apiCall } from '@/lib/apiHandler'
import { boardsService } from '@/services/boards'
import { BoardStatusEnum } from '@/services/api/generated/models/board-status-enum'
import type { BaudRateEnum } from '@/services/api/generated/models/baud-rate-enum'
import { Button } from '@/components/ui/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  onCreated?: () => void
}

const baudRates: BaudRateEnum[] = [9600, 19200, 38400, 57600, 115200]

export function BoardFormModal({ isOpen, onClose, onCreated }: Props) {
  const [name, setName] = useState('')
  const [serial, setSerial] = useState('')
  const [uartPort, setUartPort] = useState('')
  const [baudRate, setBaudRate] = useState<BaudRateEnum>(115200)
  const [description, setDescription] = useState('')
  const [saving, setSaving] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await apiCall(
        () =>
          boardsService.create({
            name,
            serial_number: serial,
            uart_port: uartPort,
            baud_rate: baudRate,
            description: description || undefined,
            status: BoardStatusEnum.DISCONNECTED,
          } as any),
        {
          successMessage: 'Board created',
        },
      )
      onCreated?.()
      onClose()
      setName('')
      setSerial('')
      setUartPort('')
      setDescription('')
    } catch (err) {
      // handled by apiCall toast
    } finally {
      setSaving(false)
    }
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
          <h3 className="text-xl font-semibold theme-text">Add Board</h3>
          <p className="text-sm theme-muted">Create a new board entry with UART settings.</p>
        </div>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Name">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="Board name"
              />
            </Field>
            <Field label="Serial number">
              <input
                required
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="SN-001"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="UART port">
              <input
                required
                value={uartPort}
                onChange={(e) => setUartPort(e.target.value)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
                placeholder="/dev/ttyUSB0"
              />
            </Field>
            <Field label="Baud rate">
              <select
                value={baudRate}
                onChange={(e) => setBaudRate(Number(e.target.value) as BaudRateEnum)}
                className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              >
                {baudRates.map((rate) => (
                  <option key={rate} value={rate}>
                    {rate}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Description">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border theme-border bg-panel-soft px-3 py-2 text-sm theme-text focus:outline-none"
              rows={3}
              placeholder="Optional details"
            />
          </Field>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? 'Saving...' : 'Create'}
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
