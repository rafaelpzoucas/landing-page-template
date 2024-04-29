import { FaWhatsapp } from 'react-icons/fa'
import { profile } from './profile'

export const cta = {
  actions: {
    whatsapp: {
      icon: FaWhatsapp,
      button_text: 'Entre em contato agora',
      link: `https://wa.me/${profile.whatsapp}`,
    },
  },
}
