import { Nav, NavigationItemsType } from '@/components/nav'
import { Scale } from 'lucide-react'

const navItems: NavigationItemsType[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Serviços',
    href: '',
    subItems: [
      {
        title: 'Carpintaria',
        description: 'Serviços de carpintaria',
        href: '#',
      },
    ],
  },
  {
    title: 'Contato',
    href: '#contact',
  },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-center p-4 backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <div className="flex flex-row items-center gap-2">
          <Scale />
          <strong className="text-xl uppercase">Dr. Advogado</strong>
        </div>

        <Nav items={navItems} />
      </div>
    </header>
  )
}
