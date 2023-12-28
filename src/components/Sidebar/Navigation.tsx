'use client'

import { LinkItem } from './LinkItem'
import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'

export function Navigation() {
  return (
    <nav className="flex flex-col gap-4 leading-base text-gray-400">
      <LinkItem href="/panel" icon={ChartLineUp} content="Início" />

      <LinkItem href="/panel/explorer" icon={Binoculars} content="Explorar" />

      <LinkItem href="/panel/profile" icon={User} content="Perfil" />
    </nav>
  )
}
