import { Section } from '@/components/section'

const metrics = [
  {
    title: '12k+',
    description: 'Clientes satisfeitos',
  },
  {
    title: '124k+',
    description: 'Parceiros',
  },
  {
    title: '124k+',
    description: 'Casos resolvidos',
  },
  {
    title: '24+',
    description: 'Anos de experiência',
  },
]

export function Metrics() {
  return (
    <Section>
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
