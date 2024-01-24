'use client'

import Link from 'next/link'
import Image from 'next/image'
import { RatingStars } from '@/components/RatingStars'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { useSession } from 'next-auth/react'
import { useLastRating } from '@/hooks/useLastRating'
import { formatDate } from '@/utils/format-date'

export function LastReadCard() {
  const session = useSession()

  const { data: lastRating, isLoading } = useLastRating(
    session.data?.user.id ?? '',
  )

  if (session.status === 'unauthenticated' || !lastRating || !lastRating.book)
    return

  const createdAt = !isLoading && formatDate(lastRating.created_at)

  return (
    <section className="mb-10">
      <header className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-normal leading-base text-gray-100">
          Sua última leitura
        </h3>

        <Link
          href="/panel/profile"
          className="flex items-center gap-2 px-2 py-1 text-purple-100 transition-colors hover:rounded hover:bg-link-purple"
        >
          <span className="text-sm font-bold leading-base">Ver todas</span>
          <CaretRight size="1rem" />
        </Link>
      </header>

      <Link
        href="/panel/profile"
        className="flex gap-6 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500"
      >
        <Image
          src={lastRating.book.cover_url}
          alt={`Capa do livro ${lastRating.book.name}`}
          width={108}
          height={152}
        />

        <div>
          <div className="mb-3 flex justify-between">
            <span className="text-sm leading-base text-gray-300">
              {createdAt}
            </span>

            <RatingStars rating={lastRating.rate} />
          </div>

          <strong className="block leading-short text-gray-100">
            {lastRating.book.name}
          </strong>

          <span className="mb-6 block text-sm leading-base text-gray-400">
            {lastRating.book.author}
          </span>

          <p className="text-sm leading-base text-gray-300">
            {lastRating.description}
          </p>
        </div>
      </Link>
    </section>
  )
}
