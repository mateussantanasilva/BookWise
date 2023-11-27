import { Star } from '@phosphor-icons/react'

interface RatingStarsProps {
  rating: number
  size?: '1rem' | '1.25rem' | '1.75rem'
}

export function RatingStars({ rating, size = '1rem' }: RatingStarsProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const starStyle = index + 1 <= rating ? 'fill' : 'regular'

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

    // 16, 20, 28
  )
}
