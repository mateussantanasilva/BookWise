import { ComponentProps } from 'react'
import Image from 'next/image'
import { RatingStars } from './RatingStars'

type SimpleBookCardProps = ComponentProps<typeof Image> & {
  title: string
  author: string
  size: 108 | 64
}

export function SimpleBookCard({
  title,
  author,
  size,
  ...props
}: SimpleBookCardProps) {
  return (
    <article className="flex gap-5 rounded-lg bg-gray-700 px-5 py-4 transition-shadow hover:ring-2 hover:ring-gray-600">
      <Image {...props} src={props.src} alt={props.alt} width={size} />

      <div className="flex flex-col justify-between text-start">
        <div>
          <strong className="block leading-short text-gray-100">{title}</strong>
          <span className="block text-sm leading-base text-gray-400">
            {author}
          </span>
        </div>

        <RatingStars rating={4} />
      </div>
    </article>
  )
}
