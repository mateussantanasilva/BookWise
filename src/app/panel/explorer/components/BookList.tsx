'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { SimpleBookCard } from '@/components/SimpleBookCard'
import { BookDetailsDialog } from './BookDetailsDialog'

import BookExampleImage from 'public/images/books/o-poder-do-habito.png'

export function BookList() {
  return (
    <div className="mr-24 mt-12 grid grid-cols-3 gap-5">
      <Dialog.Root>
        <Dialog.Trigger>
          <SimpleBookCard
            src={BookExampleImage}
            alt="Capa do livro A revolução dos bichos"
            title="O poder do hábito"
            author="George Orwell"
            size={108}
          />
        </Dialog.Trigger>

        <BookDetailsDialog />
      </Dialog.Root>
    </div>
  )
}
