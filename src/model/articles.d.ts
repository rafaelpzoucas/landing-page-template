import { StaticImageData } from 'next/image'

export type ArticleType = {
  id: number
  cover_img: StaticImageData
  title: string
  summary: string
  body: string
}
