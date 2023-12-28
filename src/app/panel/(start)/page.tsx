import { PublicReviewPost } from './components/PublicReviewPost'
import { LastReadCard } from './components/LastReadCard'
import { BooksSidebar } from './components/BooksSidebar'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'

export default function Panel() {
  return (
    <>
      <header className="mb-10 flex items-center gap-3 pt-[4.5rem]">
        <ChartLineUp size="2rem" className="text-green-100" />
        <h1 className="text-2xl font-bold leading-short text-gray-100">
          Início
        </h1>
      </header>

      <div className="mb-4 grid grid-cols-panel gap-16">
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

        <BooksSidebar />
      </div>
    </>
  )
}
