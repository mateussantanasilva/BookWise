'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SidebarLink } from './SidebarLink'
import { Binoculars, ChartLineUp, SignIn, User } from '@phosphor-icons/react'

import LogoImage from 'public/images/logo.png'

export function Sidebar() {
  return (
    <aside className="h-aside bg-aside fixed mx-5 my-4 flex flex-col items-center rounded-xl bg-no-repeat px-[3.25rem] pb-6 pt-10">
      <Image
        src={LogoImage}
        alt="Logo do BookWise com um livro ao lado"
        width={128}
        priority
      />

      <nav className="mt-16 flex h-full flex-col justify-between">
        <div className="flex flex-col gap-4 leading-base text-gray-400">
          <SidebarLink href="/panel" icon={ChartLineUp} content="Início" />

          <SidebarLink
            href="/panel/explorer"
            icon={Binoculars}
            content="Explorar"
          />

          <SidebarLink href="/panel/profile" icon={User} content="Perfil" />
        </div>

        <Link
          href="/"
          className="text group m-1 flex items-center gap-3 font-bold leading-base text-gray-200 transition-colors hover:text-gray-100"
        >
          Fazer login
          <SignIn
            size="1.25rem"
            className="text-green-100 transition-colors group-hover:text-gray-100"
          />
        </Link>
      </nav>
    </aside>
  )
}
