'use client'

import { ReviewPost } from '@/components/BookDialog/ReviewPost'
import { LoginDialog } from '../LoginDialog'
import { ReviewForm } from './ReviewForm'
import { useRating } from '@/hooks/useRating'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

interface RatingListProps {
  bookId: string
}

export function RatingList({ bookId }: RatingListProps) {
  const [formIsVisible, setFormIsVisible] = useState(false)

  const session = useSession()

  const { data: ratings } = useRating(bookId)

  const userAlreadyRated = ratings?.some(
    (rating) => rating.user.id === session.data?.user.id,
  )

  return (
    <section className="mt-10">
      <header className="mb-4 flex items-center justify-between">
        <h3 className="text-sm/base font-normal text-gray-200">Avaliações</h3>

        {!userAlreadyRated && session.status === 'authenticated' && (
          <button
            onClick={() => setFormIsVisible(true)}
            disabled={formIsVisible}
            className="visible px-2 py-1 font-bold leading-base text-purple-100 transition-colors hover:rounded hover:bg-link-purple disabled:invisible"
          >
            Avaliar
          </button>
        )}

        {!userAlreadyRated && session.status === 'unauthenticated' && (
          <LoginDialog />
        )}
      </header>

      <div className="space-y-3">
        {formIsVisible && (
          <ReviewForm
            bookId={bookId}
            onFormIsVisible={() => setFormIsVisible(!formIsVisible)}
          />
        )}

        {ratings?.map((rating) => {
          const isUserRating = rating.user.id === session.data?.user.id

          return (
            <ReviewPost
              key={rating.id}
              rating={rating}
              isAuthor={isUserRating}
            />
          )
        })}
      </div>
    </section>
  )
}
