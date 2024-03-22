import { BenefitType } from '@/model/benefits'
import { Gavel, Handshake, Heart, Scale, Shield } from 'lucide-react'

export const benefits: BenefitType = {
  title: 'Por que contratar nossos serviços?',
  data: [
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
  ],
}
