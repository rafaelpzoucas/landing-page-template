import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { articles } from '@/data/articles'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Articles() {
  return (
    <Section
      id="articles"
      className="flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <h1
        className={cn(
          layout.fonts.highlight.className,
          'text-2xl md:text-4xl font-bold uppercase',
        )}
      >
        {articles.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl">
        {articles.data.slice(0, 3).map((article) => (
          <Card
            key={article.id}
            className="flex flex-col gap-2 sm:gap-4 overflow-hidden"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={article.cover_img}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-4 pt-0">
              <strong>{article.title}</strong>
              <p className="text-sm text-muted-foreground">{article.summary}</p>

              <div className="flex justify-end w-full">
                <Link
                  href={`/articles/${article.id}`}
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'flex flex-row gap-2 items-center text-primary',
                  )}
                >
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
