import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { Card } from '@/components/ui/card'
import { features } from '@/data/features'
import { cn } from '@/lib/utils'

export function Features() {
  return (
    <Section
      id="features"
      className="flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <h1
        className={cn(
          layout.fonts.highlight.className,
          'text-2xl md:text-4xl font-bold uppercase',
        )}
      >
        {features.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 max-w-7xl">
        {features.data.map((feature, index) => (
          <Card
            key={index}
            className="flex flex-col gap-2 sm:gap-4 p-6 bg-background/30"
          >
            <feature.icon className="w-10 h-10 text-primary" />
            <strong>{feature.title}</strong>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
