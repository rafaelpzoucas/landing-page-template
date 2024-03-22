import { layout } from '@/components/layout'
import { ThemeProvider } from '@/components/theme-provider'
import { profile } from '@/data/profile'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.about,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={layout.fonts.default.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
