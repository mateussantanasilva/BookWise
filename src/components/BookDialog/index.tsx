'use client'

import { useBookById } from '@/hooks/useBookById'
import { prepareRatings } from '@/utils/prepare-ratings'
import { X, BookmarkSimple, BookOpen } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'
import { StatusItem } from '../StatusItem'
import Image from 'next/image'
import { RatingList } from './RatingList'
import { RatingStars } from '../RatingStars'

interface BookDialogProps {
  bookId: string
}

export function BookDialog({ bookId }: BookDialogProps) {
  const { data: book } = useBookById(bookId)

  if (!book) return

  const { averageRating, amountRatings } = prepareRatings(book.ratings)

  const categories = book.categories
    .map((item) => item.category.name)
    .join(', ')

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="absolute bottom-0 left-0 top-0 z-10 h-full w-screen bg-overlay" />

      <Dialog.Content className="fixed bottom-0 right-0 top-0 z-20 h-screen w-book-dialog overflow-y-scroll bg-gray-800 px-12 py-6 shadow-md ">
        <Dialog.Close
          className="mb-4 ml-auto flex text-gray-400 transition-colors hover:text-gray-100"
          aria-label="Fechar modal"
          title="Fechar modal"
        >
          <X size="1.5rem" />
        </Dialog.Close>

        <section className="divide-y divide-gray-600 rounded-xl bg-gray-700 px-8 py-6 transition-shadow">
          <div className="flex gap-8 pb-10">
            <Image
              src={book.cover_url}
              alt={`Capa do livro ${book.name}`}
              height={242}
              width={172}
            />

            <div className="flex flex-col justify-between">
              <div>
                <strong className="mb-2 block text-lg/short text-gray-100">
                  {book.name}
                </strong>
                <span className="block leading-base text-gray-300">
                  {book.author}
                </span>
              </div>

              <div>
                <RatingStars rating={averageRating} size="1.25rem" />
                <span className="mt-1 block text-sm/base text-gray-400">
                  {amountRatings}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-16 py-6">
            <StatusItem
              icon={BookmarkSimple}
              title={'Categoria'}
              content={categories}
              size="lg"
            />

            <StatusItem
              icon={BookOpen}
              title={'Páginas'}
              content={book.total_pages.toString()}
              size="lg"
            />
          </div>
        </section>

        <RatingList bookId={bookId} />
      </Dialog.Content>
    </Dialog.Portal>
  )
}
