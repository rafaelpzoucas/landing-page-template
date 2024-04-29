import { profile } from '@/data/profile'
import { createClient } from '@/utils/supabase/server'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Navbar } from './navbar/navbar'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.about,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect(`${profile.admin_slug}/login`)
  }
  return (
    <main className="flex flex-row">
      <Navbar />
      {children}
    </main>
  )
}
