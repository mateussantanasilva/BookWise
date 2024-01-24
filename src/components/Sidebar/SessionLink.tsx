'use client'

import Link from 'next/link'
import { Avatar } from '../Avatar'
import { signOut, useSession } from 'next-auth/react'
import { SignIn, SignOut } from '@phosphor-icons/react/dist/ssr'

export function SessionLink() {
  const session = useSession()

  const firstName = session.data?.user.name.split(' ')[0]

  async function handleSignOut() {
    await signOut({ callbackUrl: '/' })
  }

  if (session.status === 'authenticated') {
    return (
      <Link
        href="/panel/profile"
        className="flex items-center gap-3 text-sm leading-base text-gray-200 transition-colors hover:text-gray-100"
      >
        <Avatar
          src={session.data.user.avatar_url}
          alt={session.data.user.name}
          size={32}
        />

        <span className="truncate">{firstName}</span>

        <button
          onClick={handleSignOut}
          className="p-1 text-red-500 transition-colors hover:rounded hover:bg-link-white hover:text-red-600"
        >
          <SignOut size="1.25rem" />
        </button>
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className="group m-1 flex items-center gap-3 font-bold leading-base text-gray-200 transition-colors hover:text-gray-100"
    >
      Fazer login
      <SignIn
        size="1.25rem"
        className="text-green-100 transition-colors group-hover:text-gray-100"
      />
    </Link>
  )
}
