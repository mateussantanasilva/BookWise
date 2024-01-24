'use client'

import * as SignInCard from '@/components/SignIn/Card'
import { signIn } from 'next-auth/react'

import IconGoogleImage from 'public/images/icon-google.svg'
import IconGithubImage from 'public/images/icon-github.svg'
import IconVisitorImage from 'public/images/icon-visitor.svg'

export function Options() {
  async function handleSignInGoogle() {
    await signIn('google', { callbackUrl: '/panel' })
  }

  async function handleSignInGithub() {
    await signIn('github', { callbackUrl: '/panel' })
  }

  return (
    <div className="flex flex-col gap-4">
      <SignInCard.Root onClick={handleSignInGoogle}>
        <SignInCard.Content
          icon={IconGoogleImage}
          text="Logo do google"
          content="Entrar com Google"
        />
      </SignInCard.Root>

      <SignInCard.Root onClick={handleSignInGithub}>
        <SignInCard.Content
          icon={IconGithubImage}
          text="Logo do github"
          content="Entrar com GitHub"
        />
      </SignInCard.Root>

      <SignInCard.Root href="/panel">
        <SignInCard.Content
          icon={IconVisitorImage}
          text="Logo de um foguete"
          content="Acessar como visitante"
        />
      </SignInCard.Root>
    </div>
  )
}
