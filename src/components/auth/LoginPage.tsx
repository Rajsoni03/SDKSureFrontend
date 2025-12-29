import { useState } from 'react'
import { AlertCircle, LockKeyhole, LogIn, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

export function LoginPage() {
  const { login, isLoggingIn, loginError } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    try {
      await login({ email, password })
      setMessage('Login successful. Redirecting...')
    } catch (error: any) {
      setMessage(error?.message ?? 'Login failed')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center theme-bg p-6">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border theme-border theme-panel p-8 shadow-xl shadow-emerald-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
        <div className="relative space-y-6">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <LockKeyhole className="h-5 w-5" />
            </div>
            <h1 className="text-2xl font-semibold theme-text">Sign in</h1>
            <p className="text-sm theme-muted">
              Admins and Super Admins can sign in to manage boards, test runs, and users.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block space-y-2 text-sm">
              <span className="flex items-center gap-2 theme-text">
                <Mail className="h-4 w-4 text-emerald-300" />
                Email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text outline-none transition focus:border-emerald-400/60"
                placeholder="admin@example.com"
              />
            </label>

            <label className="block space-y-2 text-sm">
              <span className="flex items-center gap-2 theme-text">
                <LockKeyhole className="h-4 w-4 text-emerald-300" />
                Password
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border theme-border theme-panel-soft px-3 py-2 text-sm theme-text outline-none transition focus:border-emerald-400/60"
                placeholder="Enter your password"
              />
            </label>

            <Button type="submit" className="w-full gap-2" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                  />
                </svg>
              ) : (
                <LogIn className="h-4 w-4" />
              )}
              {isLoggingIn ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          {(message || loginError) && (
            <div className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <AlertCircle className="mt-0.5 h-4 w-4 text-emerald-300" />
              <div>
                <p className="font-semibold text-white">Status</p>
                <p className="text-slate-200/90">
                  {message ?? (loginError as Error).message}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
