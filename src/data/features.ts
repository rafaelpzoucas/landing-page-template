import { FeatureType } from '@/model/features'
import { ClipboardCheck, FilePenLine, Handshake, Scale } from 'lucide-react'

export const features: FeatureType = {
  title: 'Conheça nossos serviços',
  data: [
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
  ],
}
