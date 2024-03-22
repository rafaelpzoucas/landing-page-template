import { FaFacebook, FaInstagram } from 'react-icons/fa'
import logoImg from '../../public/logo.png'

export const profile = {
  logo: logoImg,
  name: 'Advogado',
  phone: '55999999999',
  role: 'Advogado',
  about:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nobis porro repellendus quos et saepe dolorem dignissimos mollitia ea neque, libero perferendis aut corrupti ex vel? Ratione voluptas est perferendis!',
  social: [
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com/advogado',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/advogado',
    },
  ],
}
