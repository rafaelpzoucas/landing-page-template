import Image from 'next/image'

import { layout } from '@/components/layout'
import { buttonVariants } from '@/components/ui/button'
import { cta } from '@/data/cta'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import hero from '../../public/hero-image.jpg'

export function Cover() {
  const action = cta.actions.whatsapp

  return (
    <section id="cover" className="flex items-center justify-center">
      <div className="fixed w-full h-screen">
        <Image src={hero} alt="" fill className="object-cover opacity-30" />
      </div>

      <aside className="relative z-10 w-full md:max-w-5xl h-screen flex flex-col items-center justify-center text-center gap-4 md:gap-8 p-8">
        <span>Lorem ipsum dolor</span>
        <h1
          className={cn(
            layout.fonts.highlight.className,
            'text-4xl md:text-7xl font-bold text-primary uppercase',
          )}
        >
          LOREM IPSUM DOLOR SIT
        </h1>
        <p className="text-muted-foreground md:text-xl md:max-w-3xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quia, placeat harum consectetur eligendi nemo voluptatibus
        </p>

        <Link
          href={action.link}
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'mt-10',
          )}
        >
          <action.icon className="text-lg mr-2" />
          {action.button_text}
        </Link>
      </aside>
    </section>
  )
}
