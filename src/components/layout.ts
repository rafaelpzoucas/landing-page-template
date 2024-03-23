import { Inter, Tinos } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const tinos = Tinos({ weight: ['400', '700'], subsets: ['latin'] })

export const layout = {
  fonts: {
    default: inter,
    highlight: tinos,
  },
  header: true,
  cover: true,
  metrics: true,
  features: true,
  cta: true,
  benefits: true,
  articles: true,
  social_proof: true,
  faq: true,
  footer: true,
  copyright: true,
}
