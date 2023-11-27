'use client'

import Image from 'next/image'
import { SidebarLink } from './SidebarLink'
import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'

import LogoImage from 'public/images/logo.png'
import { SessionControlLink } from './SessionControlLink'

export function Sidebar() {
  return (
    <aside className="fixed mx-5 my-4 flex h-aside flex-col items-center rounded-xl bg-aside bg-cover bg-no-repeat px-[3.25rem] pb-6 pt-10">
      <Image
        src={LogoImage}
        alt="Logo do BookWise com um livro ao lado"
        width={128}
        priority
      />

      <nav className="mt-16 flex h-full flex-col items-center justify-between">
        <div className="flex flex-col gap-4 leading-base text-gray-400">
          <SidebarLink href="/panel" icon={ChartLineUp} content="Início" />

          <SidebarLink
            href="/panel/explorer"
            icon={Binoculars}
            content="Explorar"
          />

          <SidebarLink href="/panel/profile" icon={User} content="Perfil" />
        </div>

        <SessionControlLink />
      </nav>
    </aside>
  )
}
