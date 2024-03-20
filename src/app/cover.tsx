import Image from 'next/image'

import { Button } from '@/components/ui/button'
import hero from '../../public/hero-image.jpg'

export function Cover() {
  return (
    <section id="cover" className="flex items-center justify-center">
      <div className="fixed w-full h-screen">
        <Image src={hero} alt="" fill className="object-cover opacity-30" />
      </div>

      <aside className="relative z-10 w-full md:max-w-5xl h-screen flex flex-col items-center justify-center text-center gap-4 md:gap-8 p-8">
        <span>Lorem ipsum dolor?</span>
        <h1 className="text-4xl md:text-7xl font-bold text-primary">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-muted-foreground md:text-xl md:max-w-3xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quia, placeat harum consectetur eligendi nemo voluptatibus
        </p>
        <Button size={'lg'}>Entre em contato agora</Button>
      </aside>
    </section>
  )
}
