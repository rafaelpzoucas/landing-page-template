import { Header } from '@/app/header'
import { layout } from '@/components/layout'
import { articles } from '@/data/articles'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.data.filter(
    (article) => article.id.toString() === params.slug,
  )[0]
  return (
    <main className="flex flex-col items-center">
      <Header />
      <header className="flex w-full h-[400px] justify-center">
        <div className="fixed w-full h-[400px]">
          <Image
            src={article.cover_img}
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="flex items-end w-full max-w-5xl h-[400px] z-10 p-8 md:p-16">
          <h1
            className={cn(
              layout.fonts.highlight.className,
              'text-3xl uppercase md:text-5xl font-bold text-primary',
            )}
          >
            {article.title}
          </h1>
        </div>
      </header>

      <article className="flex flex-col gap-8 w-full max-w-5xl p-8 md:p-16 z-50 bg-background">
        <p className="text-muted-foreground text-lg md:text-xl">
          {article.body}
        </p>
      </article>
    </main>
  )
}
