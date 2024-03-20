import { Section } from '@/components/section'
import { metrics } from '@/data/metrics'

export function Metrics() {
  return (
    <Section id="metrics">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            <strong className="text-2xl md:text-4xl text-primary">
              {metric.title}
            </strong>
            <span className="text-xs md:text-lg text-muted-foreground">
              {metric.description}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
