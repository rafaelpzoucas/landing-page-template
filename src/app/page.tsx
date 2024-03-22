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
      {layout.header === 'true' && <Header />}
      {layout.cover === 'true' && <Cover />}
      <div className="relative z-20 bg-background">
        {layout.metrics === 'true' && <Metrics />}
        {layout.features === 'true' && <Features />}
        {layout.cta === 'true' && <CallToAction />}
        {layout.benefits === 'true' && <Benefits />}
        {layout.articles === 'true' && <Articles />}
        {layout.social_proof === 'true' && <SocialProof />}
        {layout.footer === 'true' && <Footer />}
        {layout.copyright === 'true' && (
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
