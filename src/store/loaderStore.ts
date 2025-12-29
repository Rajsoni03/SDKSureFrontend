import { create } from 'zustand'

interface LoaderState {
  pending: number
  isLoading: boolean
  show: () => void
  hide: () => void
  reset: () => void
}

export const useLoaderStore = create<LoaderState>((set) => ({
  pending: 0,
  isLoading: false,
  show: () =>
    set((state) => {
      const next = state.pending + 1
      return { pending: next, isLoading: next > 0 }
    }),
  hide: () =>
    set((state) => {
      const next = Math.max(0, state.pending - 1)
      return { pending: next, isLoading: next > 0 }
    }),
  reset: () => set({ pending: 0, isLoading: false }),
}))
