import Image from 'next/image'
import { Navigation } from './Navigation'
import { SessionLink } from './SessionLink'

import LogoImage from 'public/images/logo.png'

export function Sidebar() {
  return (
    <aside className="fixed mx-5 my-4 flex h-aside w-sidebar flex-col items-center rounded-xl bg-aside bg-cover bg-no-repeat px-5 pb-6 pt-10">
      <Image
        src={LogoImage}
        alt="Logo do BookWise com um livro ao lado"
        width={128}
        priority
      />

      <div className="mt-16 flex h-full flex-col items-center justify-between">
        <Navigation />

        <SessionLink />
      </div>
    </aside>
  )
}
