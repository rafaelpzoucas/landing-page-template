import { cn } from '@/lib/utils'
import React from 'react'

export type SectionProps = React.HTMLAttributes<HTMLElement>

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => {
    const Comp = 'section'
    return (
      <Comp
        className={cn('p-8 md:p-16 py-16 even:bg-secondary/50', className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Section.displayName = 'Section'

export { Section }
