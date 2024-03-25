import { profile } from '@/data/profile'
import { format } from 'date-fns'
import Link from 'next/link'

export function Copyright() {
  const year = format(new Date().toISOString(), 'yyyy')

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-secondary text-muted-foreground text-sm text-center md:text-left">
      <span>
        &copy; {profile.name} {year} - Todos os direitos reservados
      </span>
      <span className="hidden md:flex opacity-10">|</span>
      <span>
        Desenvolvido por{' '}
        <Link
          href="https://rafaelzoucas.vercel.app"
          className="underline"
          target="_blank"
        >
          Rafael Zoucas
        </Link>
      </span>
    </div>
  )
}
