'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRating } from '@/hooks/useRating'
import { Avatar } from '@/components/Avatar'
import { RatingStars } from '@/components/RatingStars'
import { formatDate } from '@/utils/format-date'

export function ReviewList() {
  const { data: ratingPosts, isLoading } = useRating()

  return (
    <section>
      <header className="mb-4">
        <h3 className="text-sm font-normal leading-base text-gray-100">
          Avaliações mais recentes
        </h3>
      </header>

      <div className="space-y-3">
        {ratingPosts?.map((ratingPost) => {
          const createdAt = !isLoading && formatDate(ratingPost.created_at)

          return (
            <article key={ratingPost.id} className="rounded-lg bg-gray-700 p-6">
              <header className="mb-8 flex justify-between">
                <Link href="/panel/profile" className="flex gap-4">
                  <Avatar
                    src={ratingPost.user.avatar_url}
                    alt={ratingPost.user.name}
                    size={40}
                    className="h-10"
                  />

                  <div>
                    <p className="leading-base text-gray-100">
                      {ratingPost.user.name}
                    </p>
                    <span className="text-sm leading-base text-gray-400">
                      {createdAt}
                    </span>
                  </div>
                </Link>

                <RatingStars rating={ratingPost.rate} />
              </header>

              <div className="flex gap-5">
                <Image
                  src={ratingPost.book.cover_url}
                  alt="Capa do livro O Hobbit"
                  width={108}
                  height={152}
                />

                <div>
                  <strong className="block leading-short text-gray-100">
                    {ratingPost.book.name}
                  </strong>

                  <span className="mb-5 block text-sm leading-base text-gray-400">
                    {ratingPost.book.author}
                  </span>

                  <p className="text-sm leading-base text-gray-300">
                    {`${ratingPost.description} `}
                    <button className="font-bold text-purple-100">
                      ver mais
                    </button>
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
