'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'

export function Navigation() {
  const pathname = usePathname()
  const session = useSession()

  return (
    <nav className="flex flex-col gap-4 leading-base text-gray-400">
      <Link
        href="/panel"
        data-state={pathname === '/panel' ? 'active' : 'inactive'}
        className="relative my-2 flex items-center gap-3 transition-colors before:absolute before:-left-4 before:hidden before:h-6 before:w-1 before:rounded-full before:bg-gradient-vertical before:content-[''] hover:text-gray-100 data-[state=active]:font-bold data-[state=active]:text-gray-100 data-[state=active]:before:block"
      >
        <ChartLineUp size="1.5rem" />
        <span>Início</span>
      </Link>

      <Link
        href="/panel/explorer"
        data-state={pathname === '/panel/explorer' ? 'active' : 'inactive'}
        className="relative my-2 flex items-center gap-3 transition-colors before:absolute before:-left-4 before:hidden before:h-6 before:w-1 before:rounded-full before:bg-gradient-vertical before:content-[''] hover:text-gray-100 data-[state=active]:font-bold data-[state=active]:text-gray-100 data-[state=active]:before:block"
      >
        <Binoculars size="1.5rem" />
        <span>Explorar</span>
      </Link>

      {session.status === 'authenticated' && (
        <Link
          href="/panel/profile"
          data-state={pathname === '/panel/profile' ? 'active' : 'inactive'}
          className="relative my-2 flex items-center gap-3 transition-colors before:absolute before:-left-4 before:hidden before:h-6 before:w-1 before:rounded-full before:bg-gradient-vertical before:content-[''] hover:text-gray-100 data-[state=active]:font-bold data-[state=active]:text-gray-100 data-[state=active]:before:block"
        >
          <User size="1.5rem" />
          <span>Perfil</span>
        </Link>
      )}
    </nav>
  )
}
