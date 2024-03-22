import { Inter, Tinos } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const tinos = Tinos({ weight: ['400', '700'], subsets: ['latin'] })

export const layout = {
  fonts: {
    default: inter,
    highlight: tinos,
  },
  header: process.env.LAYOUT_HEADER,
  cover: process.env.LAYOUT_COVER,
  metrics: process.env.LAYOUT_METRICS,
  features: process.env.LAYOUT_FEATURES,
  cta: process.env.LAYOUT_CTA,
  benefits: process.env.LAYOUT_BENEFITS,
  articles: process.env.LAYOUT_ARTICLES,
  social_proof: process.env.LAYOUT_SOCIAL_PROOF,
  footer: process.env.LAYOUT_FOOTER,
  copyright: process.env.LAYOUT_COPYRIGHT,
}
