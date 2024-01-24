'use client'

import Image from 'next/image'
import { RatingStars } from '@/components/RatingStars'
import { useSession } from 'next-auth/react'
import { useRatingById } from '@/hooks/useRatingById'
import { formatDate } from '@/utils/format-date'

interface ProfileReviewListProps {
  filter: null | string
}

export function ProfileReviewList({ filter }: ProfileReviewListProps) {
  const { data } = useSession()

  const { data: ratings, isLoading } = useRatingById({
    userId: data?.user.id,
    filter,
  })

  return (
    <section className="mt-8 space-y-6">
      {ratings?.map((rating) => {
        const createdAt = !isLoading && formatDate(rating.created_at)

        return (
          <article key={rating.id}>
            <span className="mb-2 block text-sm leading-base text-gray-300">
              {createdAt}
            </span>

            <div className="rounded-lg bg-gray-700 p-6">
              <div className="mb-6 flex gap-5">
                <Image
                  src={rating.book.cover_url}
                  alt={`Capa do livro ${rating.book.name}`}
                  width={98}
                  height={134}
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <strong className="block text-lg leading-short text-gray-100">
                      {rating.book.name}
                    </strong>

                    <span className="mb-5 block text-sm leading-base text-gray-400">
                      {rating.book.author}
                    </span>
                  </div>

                  <RatingStars rating={rating.rate} />
                </div>
              </div>

              <p className="text-sm leading-base text-gray-300">
                {rating.description}
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )
}
