import Image from 'next/image'
import { RatingStars } from '@/components/RatingStars'

import BookExampleImage from 'public/images/books/o-hobbit.png'

export function PrivateReviewPost() {
  return (
    <article>
      <span className="mb-2 block text-sm leading-base text-gray-300">
        Há 2 dias
      </span>

      <div className="rounded-lg bg-gray-700 p-6">
        <div className="mb-6 flex gap-5">
          <Image
            src={BookExampleImage}
            alt="Capa do livro O Hobbit"
            width={98}
          />

          <div className="flex flex-col justify-between">
            <div>
              <strong className="block text-lg leading-short text-gray-100">
                Entendendo Algoritmos
              </strong>

              <span className="mb-5 block text-sm leading-base text-gray-400">
                Aditya Bhargava
              </span>
            </div>

            <RatingStars rating={4} />
          </div>
        </div>

        <p className="text-sm leading-base text-gray-300">
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis.
        </p>
        <p className="text-sm leading-base text-gray-300">
          Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet
          tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus
          ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </div>
    </article>
  )
}
