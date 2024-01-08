'use client'

import * as Dialog from '@radix-ui/react-dialog'
import * as BookCard from '@/components/BookCard'
import { BookDetailsDialog } from './BookDetailsDialog'
import { useBook } from '@/hooks/useBook'

export function BookList() {
  const { data: bookList } = useBook()

  return (
    <div className="mb-4 mr-24 mt-12 grid grid-cols-3 gap-5">
      {bookList?.map((book) => {
        return (
          <Dialog.Root key={book.id}>
            <Dialog.Trigger>
              <BookCard.Root>
                <BookCard.Content
                  src={book.cover_url}
                  alt={`Capa do livro ${book.name}`}
                  title={book.name}
                  author={book.author}
                  width={108}
                  height={152}
                />
              </BookCard.Root>
            </Dialog.Trigger>

            <BookDetailsDialog book={book} />
          </Dialog.Root>
        )
      })}
    </div>
  )
}
