import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-slate-950 hover:bg-emerald-400 focus-visible:ring-emerald-300',
        secondary:
          'bg-[var(--panel)] text-[var(--text)] hover:bg-[var(--panel-soft)] focus-visible:ring-[var(--border)]',
        ghost:
          'bg-transparent text-[var(--text)] hover:bg-[var(--panel-soft)] focus-visible:ring-[var(--border)]',
        danger:
          'bg-red-500 text-white hover:bg-red-400 focus-visible:ring-red-300',
      },
      size: {
        sm: 'h-9 px-3 py-2',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-5 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
