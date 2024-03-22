import { profile } from '@/data/profile'
import { format } from 'date-fns'
import Link from 'next/link'

export function Copyright() {
  const year = format(new Date().toISOString(), 'yyyy')

  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-secondary text-muted-foreground text-sm">
      <span>
        Copyright &copy; {year} - Todos os direitos reservados {profile.name}
      </span>
      <span>|</span>
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
