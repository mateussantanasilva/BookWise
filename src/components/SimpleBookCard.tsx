import Image from 'next/image'
import { RatingStars } from './RatingStars'

import BookExampleImage from 'public/images/books/o-hobbit.png'

export function SimpleBookCard() {
  return (
    <article className="flex gap-5 rounded-lg bg-gray-700 px-5 py-4 transition-shadow hover:ring-2 hover:ring-gray-600">
      <Image
        src={BookExampleImage}
        alt="Capa do livro A revolução dos bichos"
        width={64}
      />

      <div className="flex flex-col justify-between">
        <div>
          <strong className="block leading-short text-gray-100">
            A revolução dos bichos
          </strong>
          <span className="block text-sm leading-base text-gray-400">
            George Orwell
          </span>
        </div>

        <RatingStars rating={4} />
      </div>
    </article>
  )
}
