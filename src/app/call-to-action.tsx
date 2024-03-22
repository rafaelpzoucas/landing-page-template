import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { cta } from '@/data/cta'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function CallToAction() {
  const action = cta.actions[0]

  return (
    <Section
      id="cta"
      className="flex flex-col items-center justify-center gap-4 text-center bg-gradient-to-r from-primary via-[#F4E29F] to-[#A0750F] text-primary-foreground"
    >
      <p className="text-muted">{cta.subtitle}</p>
      <h1
        className={cn(
          layout.fonts.highlight.className,
          'text-3xl md:text-5xl font-bold max-w-lg',
        )}
      >
        {cta.title}
      </h1>

      <Link
        href={action.link}
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'lg' }),
          'mt-10',
        )}
      >
        <action.icon className="text-lg mr-2" />
        {action.button_text}
      </Link>
    </Section>
  )
}
