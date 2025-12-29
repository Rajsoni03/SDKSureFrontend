import { Moon, Sun } from 'lucide-react'
import { Button } from './button'
import { useThemeStore } from '@/store/themeStore'

export function ThemeToggle() {
  const { theme, toggle } = useThemeStore()
  const isDark = theme === 'dark'

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2"
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {isDark ? 'Light' : 'Dark'}
    </Button>
  )
}
