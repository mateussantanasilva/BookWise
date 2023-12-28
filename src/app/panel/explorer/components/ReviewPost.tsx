import { RatingStars } from '@/components/RatingStars'
import { Avatar } from '@/components/Avatar'

import AvatarExampleImage from 'public/images/avatar-example.png'

export function ReviewPost() {
  return (
    <article className="rounded-lg bg-gray-700 p-6">
      <header className="mb-5 flex justify-between">
        <div className="flex gap-4">
          <Avatar src={AvatarExampleImage} alt="Foto de perfil" />

          <div>
            <p className="font-bold leading-base text-gray-100">Jaxson Dias</p>
            <span className="text-sm/base text-gray-400">Há 2 dias</span>
          </div>
        </div>

        <RatingStars rating={4} />
      </header>

      <p className="text-sm/base text-gray-300">
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </article>
  )
}
