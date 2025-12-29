import { create } from 'zustand'
import type { User } from '@/services/api/generated/models/user'

interface Tokens {
  access: string
  refresh: string
}

interface AuthState {
  user: User | null
  tokens: Tokens | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  setTokens: (tokens: Tokens | null) => void
  clear: () => void
}

const initialAccess = typeof window !== 'undefined' ? window.localStorage.getItem('accessToken') : null
const initialRefresh =
  typeof window !== 'undefined' ? window.localStorage.getItem('refreshToken') : null
const initialUser =
  typeof window !== 'undefined'
    ? (() => {
        const raw = window.localStorage.getItem('currentUser')
        if (!raw) return null
        try {
          return JSON.parse(raw) as User
        } catch {
          return null
        }
      })()
    : null

export const useAuthStore = create<AuthState>((set) => ({
  user: initialUser,
  tokens: initialAccess && initialRefresh ? { access: initialAccess, refresh: initialRefresh } : null,
  isAuthenticated: !!initialAccess,

  setUser: (user) =>
    set((state) => ({
      user,
      ...(typeof window !== 'undefined' && (() => {
        if (user) {
          window.localStorage.setItem('currentUser', JSON.stringify(user))
        } else {
          window.localStorage.removeItem('currentUser')
        }
        return {}
      })()),
      isAuthenticated: state.isAuthenticated || !!user,
    })),

  setTokens: (tokens) => {
    if (tokens) {
      window.localStorage.setItem('accessToken', tokens.access)
      window.localStorage.setItem('refreshToken', tokens.refresh)
    } else {
      window.localStorage.removeItem('accessToken')
      window.localStorage.removeItem('refreshToken')
    }
    return set({ tokens, isAuthenticated: !!tokens })
  },

  clear: () => {
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('refreshToken')
    window.localStorage.removeItem('currentUser')
    set({
      user: null,
      tokens: null,
      isAuthenticated: false,
    })
  },
}))
