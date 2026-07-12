import {
  Activity,
  BarChart2,
  Cpu,
  Compass,
  Home,
  Layers,
  Settings,
  Users,
  MonitorSmartphone,
  Plug,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/authStore'
import { RoleEnum } from '@/services/api/generated/models/role-enum'
import config from '../../../config.json'

const allNavItems = [
  { label: 'Dashboard', icon: Home, href: '/', adminOnly: false },
  { label: 'Boards', icon: Cpu, href: '/boards', adminOnly: false },
  { label: 'Test Runs', icon: Activity, href: '/test-runs', adminOnly: false },
  { label: 'Test Cases', icon: Layers, href: '/test-cases', adminOnly: false },
  { label: 'Test Scenarios', icon: Compass, href: '/test-scenarios', adminOnly: false },
  { label: 'Labels', icon: BarChart2, href: '/labels', adminOnly: false },
  { label: 'Capabilities', icon: Activity, href: '/capabilities', adminOnly: false },
  { label: 'Relays', icon: Plug, href: '/relays', adminOnly: false },
  { label: 'Workstations', icon: MonitorSmartphone, href: '/workstations', adminOnly: false },
  { label: 'Users', icon: Users, href: '/users', adminOnly: true },
  { label: 'Configs', icon: Settings, href: '/configs', adminOnly: true },
]

type SidebarProps = {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const { user } = useAuthStore()
  const isAdmin = user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.SUPER_ADMIN
  const navItems = allNavItems.filter((item) => !item.adminOnly || isAdmin)

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 w-64 border-r theme-border bg-[var(--panel)] px-4 py-6 backdrop-blur transition-transform duration-300 flex flex-col lg:static lg:translate-x-0 lg:flex',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className="flex items-center justify-between gap-2 px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
            <BarChart2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold theme-text">SDKSure</p>
            <p className="text-xs theme-muted">Test Ops</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ✕
        </Button>
      </div>

      <nav className="mt-8 space-y-1 text-sm font-medium theme-text">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                isActive
                  ? 'bg-emerald-500/15 text-[var(--text)]'
                  : 'hover:bg-[var(--panel-soft)] hover:text-[var(--text)]',
              )
            }
          >
            <item.icon className="h-4 w-4 text-emerald-300 group-hover:text-emerald-200" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-lg border theme-border theme-panel-soft px-3 py-3">
        <div className="flex items-center gap-3 text-sm theme-text">
          <Settings className="h-4 w-4 text-emerald-300" />
          <div>
            <p className="font-semibold">Environment</p>
            <p className="text-xs theme-muted">
              {config.VITE_APP_NAME ?? 'Test Management'}
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
