import { StaticImageData } from 'next/image'

export type ArticleType = {
  title: string
  data: {
    id: number
    cover_img: StaticImageData
    title: string
    summary: string
    body: string
  }[]
}
