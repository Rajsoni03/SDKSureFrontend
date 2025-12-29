import { Bell, LogOut, Menu, Search } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Sidebar } from '@/components/layout/Sidebar'
import { DashboardMetrics } from '@/components/dashboard/DashboardMetrics'
import { Button } from '@/components/ui/button'
import { LoginPage } from '@/components/auth/LoginPage'
import { useAuthStore } from '@/store/authStore'
import { useAuth } from '@/hooks/useAuth'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useThemeStore } from '@/store/themeStore'
import { cn } from '@/lib/utils'

function App() {
  const { isAuthenticated } = useAuthStore()
  const { logout } = useAuth()
  const { theme } = useThemeStore()
  const isDark = theme === 'dark'
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    <div className={cn('flex min-h-screen theme-bg', !isDark && 'text-slate-900')}>
      <Sidebar isOpen={isMobileNavOpen || typeof window === 'undefined'} onClose={() => setMobileNavOpen(false)} />
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className="relative flex-1 overflow-hidden theme-panel">
        <div
          className={cn(
            'pointer-events-none absolute inset-0',
            isDark
              ? 'bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.06),transparent_25%)]'
              : 'bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.04),transparent_20%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.03),transparent_20%)]',
          )}
        />
        <div className="relative flex flex-col gap-6 p-6 sm:p-8">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <p className="text-sm uppercase tracking-wide text-emerald-300">Control Center</p>
                <h1 className={cn('text-3xl font-semibold', isDark ? 'text-white' : 'text-slate-900')}>
                  Dashboard
                </h1>
                <p className={cn('text-sm', isDark ? 'text-slate-300' : 'text-slate-600')}>
                  Monitor live metrics from boards, test runs, and users.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border theme-border theme-panel-soft px-3 py-2">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  placeholder="Search"
                  className={cn(
                    'bg-transparent text-sm placeholder:text-slate-500 focus:outline-none',
                    isDark ? 'text-white' : 'text-slate-900',
                  )}
                />
              </div>
              <Button variant="secondary" size="sm" className="gap-2">
                <Bell className="h-4 w-4" />
                Alerts
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="gap-2" onClick={logout}>
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
            </div>
          </header>

          <DashboardMetrics />
        </div>
      </div>
    </div>
  )
}

export default App
