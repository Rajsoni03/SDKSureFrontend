import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

import { useTags } from '@/hooks/useTags'
import { TagFormModal } from './TagFormModal'
import { Button } from '../ui/button'
import { apiCall } from '@/lib/apiHandler'

export function TagsPage() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [editingTag, setEditingTag] = useState<any | null>(null)

  const filters = useMemo(
    () => ({
      search: search || undefined,
      page,
      ordering: 'name',
    }),
    [search, page],
  )

  const { data, isLoading, isError, refetch } = useTags(filters)
  const tags = data?.results ?? []

  const openCreate = () => {
    setEditingTag(null)
    setShowModal(true)
  }

  const openEdit = (tag: any) => {
    setEditingTag(tag)
    setShowModal(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Metadata</p>
          <h2 className="text-2xl font-semibold theme-text">Tags</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={openCreate}>Add Tag</Button>
          <Button
            variant="secondary"
            onClick={() => apiCall(() => refetch(), { errorMessage: 'Failed to refresh tags' })}
          >
            Refresh
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border theme-border theme-panel-soft p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-lg border theme-border bg-[var(--panel)] px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="Search tags"
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
            Failed to load tags.
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="h-24 animate-pulse rounded-xl border theme-border bg-panel-soft" />
            ))}
          </div>
        ) : tags.length === 0 ? (
          <div className="rounded-xl border theme-border bg-panel-soft p-4 text-sm theme-muted">
            No tags found.
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => openEdit(tag)}
                className="rounded-xl border theme-border bg-panel-soft px-4 py-3 text-left text-sm font-semibold theme-text transition hover:border-emerald-400/50 hover:-translate-y-0.5"
              >
                {tag.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <TagFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaved={() => refetch()}
        editingTag={editingTag}
      />
    </div>
  )
}
