import { Section } from '@/components/section'
import { Gavel, Handshake, Heart, Scale, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Representação Profissional',
    description:
      'Acesso a profissionais experientes e qualificados para representar seus interesses legais com integridade e dedicação.',
  },
  {
    icon: Handshake,
    title: 'Negociações Eficazes',
    description:
      'Beneficie-se de estratégias eficazes e negociações habilidosas para resolver disputas e alcançar acordos justos e favoráveis.',
  },
  {
    icon: Gavel,
    title: 'Defesa Incansável',
    description:
      'Conte com uma defesa incansável e comprometida em proteger seus direitos e interesses em cada etapa do processo legal.',
  },
  {
    icon: Scale,
    title: 'Equilíbrio Legal',
    description:
      'Obtenha orientação jurídica personalizada e soluções equilibradas para resolver questões legais complexas com confiança e clareza.',
  },
  {
    icon: Heart,
    title: 'Atenção Individualizada',
    description:
      'Receba atenção individualizada e cuidado dedicado, com o objetivo de fornecer uma experiência jurídica personalizada e satisfatória.',
  },
]

export function Benefits() {
  return (
    <Section className="flex flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-2xl md:text-4xl font-bold">
        Por que contratar nossos serviços?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl">
        {benefits.map((benefit, index) => (
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
