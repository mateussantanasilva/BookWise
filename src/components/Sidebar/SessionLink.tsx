'use client'

import Link from 'next/link'
import { Avatar } from '../Avatar'
import { useSession } from 'next-auth/react'
import { SignIn, SignOut } from '@phosphor-icons/react/dist/ssr'

export function SessionLink() {
  const session = useSession()

  if (session.status === 'authenticated') {
    return (
      <Link
        href="/panel/profile"
        className="group flex items-center gap-3 text-sm leading-base text-gray-200 transition-colors hover:text-gray-100"
      >
        <Avatar
          src={session.data.user.avatar_url}
          alt={session.data.user.name}
          size={32}
        />

        <span className="truncate">{session.data.user.name}</span>

        <SignOut
          size="1.25rem"
          className="text-red-500 transition-colors group-hover:text-red-600"
        />
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
