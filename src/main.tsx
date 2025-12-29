import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'
import './index.css'
import { AppToaster } from './components/ui/Toaster.tsx'
import { useThemeStore } from './store/themeStore.ts'

const queryClient = new QueryClient()

const Root = () => {
  // Initialize theme attribute from store/localStorage
  useThemeStore((state) => state.theme)
  if (typeof document !== 'undefined') {
    const current = useThemeStore.getState().theme
    document.documentElement.setAttribute('data-theme', current)
  }

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <AppToaster />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)
