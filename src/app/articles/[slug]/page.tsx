import { articles } from '@/data/articles'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.data.filter(
    (article) => article.id.toString() === params.slug,
  )[0]
  return (
    <main>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </main>
  )
}
