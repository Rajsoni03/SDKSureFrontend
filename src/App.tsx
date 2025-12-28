import { Activity, Code2, Network, RadioTower, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'

const highlights = [
  {
    title: 'Real-time ready',
    description: 'Wire Pusher or Socket.IO clients into the data layer for board/test run events.',
    icon: RadioTower,
  },
  {
    title: 'Typed API client',
    description: 'OpenAPI typescript-axios generator targets src/services/api/generated.',
    icon: Code2,
  },
  {
    title: 'State + data layer',
    description: 'React Query for server cache; Zustand for UI/auth/session state.',
    icon: Activity,
  },
  {
    title: 'UI system',
    description: 'Tailwind + shadcn/ui primitives with motion-ready tokens.',
    icon: ShieldCheck,
  },
]

const steps = [
  {
    title: '1) Configure generator',
    detail: 'Update the input spec URL in openapitools.json if the backend host changes.',
  },
  {
    title: '2) Generate client',
    detail: 'Run npm run generate:api to emit DTOs, enums, and API classes.',
  },
  {
    title: '3) Consume APIs',
    detail: 'Import from @/services/api/generated and wrap calls with React Query hooks.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="border-b border-white/5 bg-surface/70 backdrop-blur">
        <div className="container flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Test Management Frontend
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold sm:text-4xl">
                React + TypeScript starter with shadcn/ui
              </h1>
              <p className="max-w-2xl text-base text-slate-300">
                Prewired for real-time dashboards, typed API integration, and rapid UI build-outs per the project plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="gap-2">
                <Network className="h-4 w-4" />
                OpenAPI ready
              </Button>
              <Button variant="secondary" className="gap-2" asChild>
                <a href="#stack">View stack</a>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4 shadow-lg shadow-emerald-500/10">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">API generator</p>
                <p className="text-xs text-slate-400">typescript-axios · http://localhost:8000/api/v1/schema/</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container space-y-12 py-12">
        <section id="stack" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-emerald-300">Implementation pillars</p>
              <h2 className="text-2xl font-semibold text-white">What’s included out of the box</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-contrast/70 p-5 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-[0_10px_60px_-20px_rgba(16,185,129,0.6)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-emerald-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-white/5 bg-surface-contrast/80 p-6 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-emerald-300">OpenAPI workflow</p>
                <h2 className="text-xl font-semibold text-white">Generate DTOs, enums, and API clients</h2>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">typescript-axios</span>
            </div>
            <div className="mt-4 space-y-4">
              {steps.map((step) => (
                <div key={step.title} className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="text-sm text-slate-300">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-500/20">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Next step</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Generate the client</h3>
            <p className="mt-2 text-sm text-emerald-100/80">
              Run <code className="rounded bg-white/10 px-2 py-1 font-mono text-xs">npm run generate:api</code> after the backend is reachable.
            </p>
            <div className="mt-4 space-y-2 text-sm text-emerald-100/90">
              <p>• Output: <span className="font-mono text-xs">src/services/api/generated</span></p>
              <p>• Spec: <span className="font-mono text-xs">http://localhost:8000/api/v1/schema/</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
