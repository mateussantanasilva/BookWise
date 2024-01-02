import { ComponentProps } from 'react'
import Image from 'next/image'
import { RatingStars } from '../RatingStars'

type ContentProps = ComponentProps<typeof Image> & {
  title: string
  author: string
  size: 108 | 64
}

export function Content({ title, author, size, ...props }: ContentProps) {
  return (
    <>
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
    </>
  )
}
