import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <Section
      id="cta"
      className="flex flex-col items-center justify-center gap-4 text-center bg-gradient-to-r from-primary via-[#F4E29F] to-[#A0750F] text-primary-foreground"
    >
      <p className="text-muted">Entre em contato</p>
      <h1 className="text-3xl md:text-5xl font-bold max-w-lg">
        Agende uma reunião para discutir o seu caso.
      </h1>

      <Button variant="secondary" size={'lg'} className="mt-10">
        Entrar em contato
      </Button>
    </Section>
  )
}
