'use client'

import { SimpleBookCard } from '@/components/SimpleBookCard'
import { PublicReviewPost } from './components/PublicReviewPost'
import { LastReadCard } from './components/LastReadCard'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

export default function Panel() {
  return (
    <>
      <header className="mb-10 flex items-center gap-3 pt-[4.5rem]">
        <ChartLineUp size="2rem" className="text-green-100" />
        <h1 className="text-2xl font-bold leading-short text-gray-100">
          Início
        </h1>
      </header>

      <div className="grid-cols-panel mb-4 grid gap-16">
        <div>
          <LastReadCard />

          <section>
            <header className="mb-4">
              <h3 className="text-sm font-normal leading-base text-gray-100">
                Avaliações mais recentes
              </h3>
            </header>

            <div className="space-y-3">
              <PublicReviewPost />
              <PublicReviewPost />
              <PublicReviewPost />
              <PublicReviewPost />
              <PublicReviewPost />
            </div>
          </section>
        </div>

        <aside className="mr-24">
          <header className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-normal leading-base text-gray-100">
              Livros populares
            </h3>

            <div className="mx-2 my-1 flex items-center gap-2 text-purple-100">
              <span className="text-sm font-bold leading-base">Ver todos</span>
              <CaretRight size="1rem" />
            </div>
          </header>

          <div className="space-y-3">
            <SimpleBookCard />
            <SimpleBookCard />
            <SimpleBookCard />
            <SimpleBookCard />
            <SimpleBookCard />
          </div>
        </aside>
      </div>
    </>
  )
}
