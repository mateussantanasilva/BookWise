import Link from 'next/link'
import { RatingStars } from '@/components/RatingStars'
import { Avatar } from '@/components/Avatar'
import { Rating } from '@/@types/rating'
import { formatDate } from '@/utils/format-date'

interface ReviewPostProps {
  rating: Rating
  isAuthor?: boolean
}

export function ReviewPost({ rating, isAuthor = false }: ReviewPostProps) {
  const createdAt = formatDate(rating.created_at)

  return (
    <article
      className="rounded-lg bg-gray-700 p-6 data-[author=true]:bg-gray-600"
      data-author={isAuthor}
    >
      <header className="mb-5 flex justify-between">
        <Link href="/panel/profile" className="flex gap-4">
          <Avatar
            src={rating.user.avatar_url}
            alt={rating.user.name}
            size={40}
            className="h-10"
          />

          <div>
            <p className="font-bold leading-base text-gray-100">
              {rating.user.name}
            </p>
            <span className="text-sm/base text-gray-400">{createdAt}</span>
          </div>
        </Link>

        <RatingStars rating={rating.rate} />
      </header>

      <p className="text-sm/base text-gray-300">{rating.description}</p>
    </article>
  )
}
