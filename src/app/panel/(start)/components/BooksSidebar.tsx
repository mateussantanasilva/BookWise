import Link from 'next/link'
import * as BookCard from '@/components/BookCard'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

import BookExampleImage from 'public/images/books/o-hobbit.jpg'

export function BooksSidebar() {
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
        <BookCard.Root href="/panel/explorer">
          <BookCard.Content
            src={BookExampleImage}
            alt="Capa do livro A revolução dos bichos"
            title="O poder do hábito"
            author="George Orwell"
            width={64}
          />
        </BookCard.Root>
      </div>
    </aside>
  )
}
