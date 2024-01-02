import Link from 'next/link'
import Image from 'next/image'
import { RatingStars } from '@/components/RatingStars'
import { Avatar } from '@/components/Avatar'

import AvatarExampleImage from 'public/images/avatar-example.png'
import BookExampleImage from 'public/images/books/o-hobbit.png'

export function PublicReviewPost() {
  return (
    <article className="rounded-lg bg-gray-700 p-6">
      <header className="mb-8 flex justify-between">
        <Link href="/panel/profile" className="flex gap-4">
          <Avatar src={AvatarExampleImage} alt="Foto de perfil" />

          <div>
            <p className="leading-base text-gray-100">Jaxson Dias</p>
            <span className="text-sm leading-base text-gray-400">Hoje</span>
          </div>
        </Link>

        <RatingStars rating={4} />
      </header>

      <div className="flex gap-5">
        <Image
          src={BookExampleImage}
          alt="Capa do livro O Hobbit"
          width={108}
        />

        <div>
          <strong className="block leading-short text-gray-100">
            O Hobbit
          </strong>

          <span className="mb-5 block text-sm leading-base text-gray-400">
            J.R.R. Tolkien
          </span>

          <p className="text-sm leading-base text-gray-300">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...{' '}
            <button className="font-bold text-purple-100">ver mais</button>
          </p>
        </div>
      </div>
    </article>
  )
}
