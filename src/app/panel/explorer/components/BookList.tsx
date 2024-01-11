'use client'

import * as Dialog from '@radix-ui/react-dialog'
import * as BookCard from '@/components/BookCard'
import { Book } from '@/@types/book'
import { prepareRatings } from '@/utils/prepare-ratings'
import { BookDialog } from '@/components/BookDialog'

interface BookListProps {
  bookList: Book[]
}

export function BookList({ bookList }: BookListProps) {
  return (
    <div className="mb-4 mr-24 mt-12 grid grid-cols-3 gap-5">
      {bookList?.map((book) => {
        const { averageRating } = prepareRatings(book.ratings)

        return (
          <Dialog.Root key={book.id}>
            <Dialog.Trigger>
              <BookCard.Root>
                <BookCard.Content
                  title={book.name}
                  author={book.author}
                  rating={averageRating}
                  src={book.cover_url}
                  alt={`Capa do livro ${book.name}`}
                  width={108}
                  height={152}
                />
              </BookCard.Root>
            </Dialog.Trigger>

            <BookDialog bookId={book.id} />
          </Dialog.Root>
        )
      })}
    </div>
  )
}
