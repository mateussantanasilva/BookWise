'use client'

import Link from 'next/link'
import * as BookCard from '@/components/BookCard'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { usePopular } from '@/hooks/usePopular'
import { prepareRatings } from '@/utils/prepare-ratings'

export function BooksSidebar() {
  const { data: popularBooks } = usePopular()

  return (
    <aside className="mr-24">
      <header className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-normal leading-base text-gray-100">
          Livros populares
        </h3>

        <Link
          href="/panel/explorer"
          className="flex items-center gap-2 px-2 py-1 text-purple-100 transition-colors hover:rounded hover:bg-link-purple"
        >
          <span className="text-sm font-bold leading-base">Ver todos</span>
          <CaretRight size="1rem" />
        </Link>
      </header>

      <div className="space-y-3">
        {popularBooks?.map((book) => {
          const { averageRating } = prepareRatings(book.ratings)

          return (
            <BookCard.Root key={book.id} href="/panel/explorer">
              <BookCard.Content
                src={book.cover_url}
                alt={`Capa do livro ${book.name}`}
                title={book.name}
                author={book.author}
                rating={averageRating}
                width={64}
                height={94}
              />
            </BookCard.Root>
          )
        })}
      </div>
    </aside>
  )
}
