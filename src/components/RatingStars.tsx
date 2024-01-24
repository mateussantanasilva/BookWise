'use client'

import { MouseEvent, useState } from 'react'
import { Star } from '@phosphor-icons/react/dist/ssr'
import { UseFormSetValue } from 'react-hook-form'
import { ReviewFormData } from './BookDialog/ReviewForm'

interface RatingStarsProps {
  rating?: number
  size?: '1rem' | '1.25rem' | '1.75rem'
  setValue?: UseFormSetValue<ReviewFormData>
}

export function RatingStars({
  rating,
  size = '1rem',
  setValue,
}: RatingStarsProps) {
  const [fillStar, setFillStar] = useState(0)

  let starStyle: 'fill' | 'regular'

  function handleFillStar(event: MouseEvent<HTMLButtonElement>) {
    const star = parseInt(event.currentTarget.value)

    setFillStar(star)
    setValue && setValue('rate', star)
  }

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        if (!rating) {
          starStyle = index + 1 <= fillStar ? 'fill' : 'regular'

          return (
            <button
              key={`star-${index}`}
              type="button"
              value={index + 1}
              onClick={handleFillStar}
            >
              <Star
                size={size}
                weight={starStyle}
                className="text-purple-100"
              />
            </button>
          )
        }

        starStyle = index + 1 <= rating ? 'fill' : 'regular'

        return (
          <Star
            key={`star-${index}`}
            size={size}
            weight={starStyle}
            className="text-purple-100"
          />
        )
      })}
    </div>
  )
}
