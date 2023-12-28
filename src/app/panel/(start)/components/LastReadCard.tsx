import Image from 'next/image'
import { RatingStars } from '@/components/RatingStars'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

import BookExampleImage from 'public/images/books/o-hobbit.png'

export function LastReadCard() {
  return (
    <section className="mb-10">
      <header className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-normal leading-base text-gray-100">
          Sua última leitura
        </h3>

        <div className="mx-2 my-1 flex items-center gap-2 text-purple-100">
          <span className="text-sm font-bold leading-base">Ver todas</span>
          <CaretRight size="1rem" />
        </div>
      </header>

      <article className="flex gap-6 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500">
        <Image
          src={BookExampleImage}
          alt="Capa do livro O Hobbit"
          width={108}
        />

        <div>
          <div className="mb-3 flex justify-between">
            <span className="text-sm leading-base text-gray-300">
              Há 2 dias
            </span>

            <RatingStars rating={4} />
          </div>

          <strong className="block leading-short text-gray-100">
            Entendendo Algoritmos
          </strong>

          <span className="mb-6 block text-sm leading-base text-gray-400">
            Aditya Bhargava
          </span>

          <p className="text-sm leading-base text-gray-300">
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectu...
          </p>
        </div>
      </article>
    </section>
  )
}
