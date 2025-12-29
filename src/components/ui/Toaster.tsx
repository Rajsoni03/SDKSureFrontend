import { Toaster } from 'react-hot-toast'

export function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className:
          'bg-slate-900 text-slate-100 border border-white/10 shadow-xl shadow-emerald-500/10',
        style: {
          padding: '12px 14px',
          borderRadius: '12px',
        },
        success: { iconTheme: { primary: '#22c55e', secondary: '#0f172a' } },
        error: { iconTheme: { primary: '#f43f5e', secondary: '#0f172a' } },
      }}
    />
  )
}
