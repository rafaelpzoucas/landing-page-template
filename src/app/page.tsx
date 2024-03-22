import { layout } from '@/components/layout'
import Link from 'next/link'
import { Articles } from './articles'
import { Benefits } from './benefits'
import { CallToAction } from './call-to-action'
import { Cover } from './cover'
import { Features } from './features'
import { Footer } from './footer'
import { Header } from './header'
import { Metrics } from './metrics'
import { SocialProof } from './social-proof'

export default function Home() {
  return (
    <main className="">
      {layout.header && <Header />}
      {layout.cover && <Cover />}
      <div className="relative z-20 bg-background">
        {layout.metrics && <Metrics />}
        {layout.features && <Features />}
        {layout.cta && <CallToAction />}
        {layout.benefits && <Benefits />}
        {layout.articles && <Articles />}
        {layout.social_proof && <SocialProof />}
        {layout.footer && <Footer />}
        {layout.copyright && (
          <div className="flex items-center justify-center gap-4 p-4 bg-secondary text-muted-foreground text-sm">
            <span>
              Copyright &copy; 2024 - Todos os direitos reservados Advogado
            </span>
            <span>|</span>
            <span>
              Desenvolvido por{' '}
              <Link href="rafaelzoucas.vercel.app">Rafael Zoucas</Link>
            </span>
          </div>
        )}
      </div>
    </main>
  )
}
