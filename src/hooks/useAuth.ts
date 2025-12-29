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
        onSuccess: (res) => {
          const { access, refresh, ...user } = res.data
          store.setTokens({ access, refresh })
          const hasUserShape = (user as any)?.id || (user as any)?.email
          store.setUser(hasUserShape ? (user as any) : null)
        },
      }),
  })

  const logout = () => {
    store.clear()
  }

  return {
    ...store,
    login: loginMutation.mutateAsync,
    loginStatus: loginMutation.status,
    loginError: loginMutation.error as Error | null,
    isLoggingIn: loginMutation.isPending,
    logout,
  }
}
