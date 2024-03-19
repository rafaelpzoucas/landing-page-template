import { Benefits } from './benefits'
import { CallToAction } from './call-to-action'
import { Cover } from './cover'
import { Features } from './features'
import { Header } from './header'
import { Metrics } from './metrics'
import { SocialProof } from './social-proof'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Cover />
      <div className="relative z-20 bg-background">
        <Metrics />
        <Features />
        <CallToAction />
        <Benefits />
        <SocialProof />
      </div>
    </main>
  )
}
