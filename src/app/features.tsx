import { Section } from '@/components/section'
import { Card } from '@/components/ui/card'
import { ClipboardCheck, FilePenLine, Handshake, Scale } from 'lucide-react'

const features = [
  {
    icon: Scale,
    title: 'Representação Legal Especializada',
    description:
      'Oferecemos representação legal especializada em uma ampla variedade de áreas, incluindo direito civil, direito penal, direito trabalhista, direito de família e muito mais.',
  },
  {
    icon: ClipboardCheck,
    title: 'Consultoria Jurídica Personalizada',
    description:
      'Fornecemos consultoria jurídica personalizada para ajudar a entender seus direitos, avaliar suas opções legais e desenvolver estratégias eficazes para resolver seu caso.',
  },
  {
    icon: FilePenLine,
    title: 'Elaboração de Documentos Legais',
    description:
      'Auxiliamos na elaboração e revisão de uma variedade de documentos legais, incluindo contratos, testamentos, procurações, acordos pré-nupciais e muito mais.',
  },
  {
    icon: Handshake,
    title: 'Mediação e Resolução Alternativa de Disputas',
    description:
      'Facilitamos processos de mediação e resolução alternativa de disputas para ajudar as partes a alcançar acordos mutuamente satisfatórios sem litígios prolongados.',
  },
  {
    icon: Scale,
    title: 'Representação em Tribunal',
    description:
      'Oferecemos representação dedicada e competente em tribunal, defendendo seus direitos e interesses com habilidade e comprometimento.',
  },
]

export function Features() {
  return (
    <Section className="flex flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-2xl md:text-4xl font-bold">
        Conheça nossos serviços
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 max-w-7xl">
        {features.map((feature, index) => (
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
