import { IconType } from 'react-icons'

export type CTAType = {
  title: string
  subtitle: string
  actions: {
    icon: IconType
    button_text: string
    link: string
  }[]
}
