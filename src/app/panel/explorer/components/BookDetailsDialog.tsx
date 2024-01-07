'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { RatingStars } from '@/components/RatingStars'
import { StatusItem } from '../../../../components/StatusItem'
import { ReviewPost } from './ReviewPost'
import { LoginDialog } from '@/components/LoginDialog'
import { X, BookOpen, BookmarkSimple } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { ReviewForm } from '@/components/ReviewForm'

import BookExampleImage from 'public/images/books/o-poder-do-habito.png'
import { useState } from 'react'

export function BookDetailsDialog() {
  const [formIsVisible, setFormIsVisible] = useState(false)
  const session = useSession()

  function handleFormIsVisible() {
    setFormIsVisible(!formIsVisible)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="absolute left-0 top-0 z-10 h-screen w-screen bg-overlay" />

      <Dialog.Content className="absolute right-0 top-0 z-20 h-screen w-book-dialog overflow-y-scroll bg-gray-800 px-12 py-6 shadow-md ">
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
              src={BookExampleImage}
              alt="Capa do livro A revolução dos bichos"
              height={242}
            />

            <div className="flex flex-col justify-between">
              <div>
                <strong className="mb-2 block text-lg/short text-gray-100">
                  14 Hábitos de Desenvolvedores Altamente Produtivos
                </strong>
                <span className="block leading-base text-gray-300">
                  Zeno Rocha
                </span>
              </div>

              <div>
                <RatingStars rating={4} size="1.25rem" />
                <span className="mt-1 block text-sm/base text-gray-400">
                  3 avaliações
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-16 py-6">
            <StatusItem
              icon={BookmarkSimple}
              title={'Categoria'}
              content="Computação, educação"
              size="lg"
            />

            <StatusItem
              icon={BookOpen}
              title={'Páginas'}
              content="160"
              size="lg"
            />
          </div>
        </section>

        <section className="mt-10">
          <header className="mb-4 flex items-center justify-between">
            <h3 className="text-sm/base font-normal text-gray-200">
              Avaliações
            </h3>

            {session.status === 'authenticated' && (
              <button
                onClick={() => setFormIsVisible(true)}
                disabled={formIsVisible}
                className="visible px-2 py-1 font-bold leading-base text-purple-100 transition-colors hover:rounded hover:bg-link-purple disabled:invisible"
              >
                Avaliar
              </button>
            )}

            {session.status === 'unauthenticated' && <LoginDialog />}
          </header>

          <div className="space-y-3">
            {formIsVisible && (
              <ReviewForm onFormIsVisible={handleFormIsVisible} />
            )}

            <ReviewPost isAuthor />
            <ReviewPost />
          </div>
        </section>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
