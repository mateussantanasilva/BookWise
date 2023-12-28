'use client'

import { ElementType } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface LinkItemProps {
  href: string
  icon: ElementType
  content: string
}

export function LinkItem({ href, icon: Icon, content }: LinkItemProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      data-state={pathname === href ? 'active' : 'inactive'}
      className="relative my-2 flex items-center gap-3 transition-colors before:absolute before:-left-4 before:hidden before:h-6 before:w-1 before:rounded-full before:bg-gradient-vertical before:content-[''] hover:text-gray-100 data-[state=active]:font-bold data-[state=active]:text-gray-100 data-[state=active]:before:block"
    >
      <Icon size="1.5rem" />
      {content}
    </Link>
  )
}
