import { LucideIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type ProfileType = {
  logo: StaticImageData
  name: string
  phone: string
  email: string
  address: string
  role: string
  about: string
  social: {
    name: string
    icon: IconType | LucideIcon
    href: string
  }[]
}
