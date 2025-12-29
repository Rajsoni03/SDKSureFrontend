import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth'
import { useAuthStore } from '@/store/authStore'
import { apiCall } from '@/lib/apiHandler'

export function useAuth() {
  const store = useAuthStore()

  const loginMutation = useMutation({
    mutationFn: (payload: Parameters<typeof authService.login>[0]) =>
      apiCall(() => authService.login(payload), {
        successMessage: 'Signed in',
        errorMessage: 'Login failed',
        onSuccess: async (res) => {
          const { access, refresh, ...user } = res.data
          store.setTokens({ access, refresh })
          const hasUserShape = (user as any)?.id || (user as any)?.email
          store.setUser(hasUserShape ? (user as any) : null)
          try {
            const me = await authService.me()
            if (me?.data) {
              store.setUser(me.data as any)
            }
          } catch {
            // ignore; leave user as is
          }
        },
      }),
  })

  const logout = () => {
    store.clear()
  }

  const fetchCurrentUser = async () => {
    const me = await authService.me()
    if (me?.data) {
      store.setUser(me.data as any)
    }
  }

  return {
    ...store,
    login: loginMutation.mutateAsync,
    loginStatus: loginMutation.status,
    loginError: loginMutation.error as Error | null,
    isLoggingIn: loginMutation.isPending,
    logout,
    fetchCurrentUser,
  }
}
