import Link from 'next/link'
import { Avatar } from '../Avatar'
import { SignIn, SignOut } from '@phosphor-icons/react/dist/ssr'

import AvatarExampleImage from 'public/images/avatar-example.png'

export function SessionLink() {
  return (
    <>
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

      {/* <Link
        href="/"
        className="group flex items-center gap-3 text-sm leading-base text-gray-200 transition-colors hover:text-gray-100"
      >
        <Avatar src={AvatarExampleImage} alt="Foto de perfil" size={32} />
        Cristofer
        <SignOut
          size="1.25rem"
          className="text-red-500 transition-colors group-hover:text-red-600"
        />
      </Link> */}
    </>
  )
}
