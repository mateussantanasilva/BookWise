import { Avatar } from '@/components/Avatar'
import { StatusItem } from './StatusItem'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'

import AvatarExampleImage from 'public/images/avatar-example.png'

export function ProfileSidebar() {
  return (
    <aside className="mr-24 flex h-fit flex-col items-center border-l border-gray-700">
      <header className="mb-2 flex flex-col items-center">
        <Avatar src={AvatarExampleImage} alt="Foto de perfil" size={72} />

        <strong className="mt-5 text-xl leading-short text-gray-100">
          Cristofer Rosser
        </strong>
        <span className="text-sm leading-base text-gray-400">
          membro desde 2019
        </span>
      </header>

      <div className="my-8 block h-1 w-8 rounded-full bg-gradient-horizontal"></div>

      <ul className="my-5 space-y-10">
        <StatusItem icon={BookOpen} title={'3853'} content="Páginas lidas" />

        <StatusItem icon={Books} title={'10'} content="Livros avaliados" />

        <StatusItem icon={UserList} title={'8'} content="Autores lidos" />

        <StatusItem
          icon={BookmarkSimple}
          title={'Computação'}
          content="Categoria mais lida"
        />
      </ul>
    </aside>
  )
}
