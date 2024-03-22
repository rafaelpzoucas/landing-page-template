import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { benefits } from '@/data/benefits'
import { cn } from '@/lib/utils'

export function Benefits() {
  return (
    <Section
      id="benefits"
      className="flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <h1
        className={cn(
          layout.fonts.highlight.className,
          'text-2xl md:text-4xl font-bold uppercase',
        )}
      >
        {benefits.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl">
        {benefits.data.map((benefit, index) => (
          <div key={index} className="flex flex-col gap-2 sm:gap-4">
            <benefit.icon className="w-10 h-10 text-primary" />
            <strong>{benefit.title}</strong>
            <p className="text-sm text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
