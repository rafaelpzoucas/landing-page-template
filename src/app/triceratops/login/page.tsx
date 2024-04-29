import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/utils/supabase/server'

import { Input } from '@/components/ui/input'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { message: string; error: string }
}) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    return redirect(`/${profile.admin_slug}`)
  }

  const signIn = async () => {
    'use server'

    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOtp({
      email: profile.email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect(`/${profile.admin_slug}`)
  }

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <Card className="flex flex-col items-center max-w-sm w-full bg-secondary/30">
        <CardHeader>
          <CardTitle className="text-3xl text-primary">Area restrita</CardTitle>
        </CardHeader>

        <CardContent className="w-full p-4">
          {searchParams.message && (
            <div>
              <div className="">
                <p className="text-lg">
                  {searchParams.error
                    ? 'Erro ao autenticar'
                    : 'Confira seu e-mail'}
                </p>
                <span className="text-sm text-muted-foreground">
                  {searchParams.message}
                </span>
              </div>

              {searchParams.error && (
                <Link
                  href={`/${profile.admin_slug}/login`}
                  className={cn(buttonVariants(), 'w-full mt-8')}
                >
                  Tentar novamente
                </Link>
              )}
            </div>
          )}

          {!searchParams.message && (
            <form action={signIn} className="flex flex-col gap-6">
              <Input name="email" placeholder="Digite o seu e-mail..." />
              <Input
                name="password"
                type="password"
                placeholder="Digite a sua senha..."
              />
              <Button type="submit" className="w-full">
                Enviar link de login
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  )
}
