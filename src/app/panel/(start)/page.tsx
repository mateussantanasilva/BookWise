import { LastReadCard } from './components/LastReadCard'
import { BooksSidebar } from './components/BooksSidebar'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import { ReviewList } from './components/ReviewList'

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

          <ReviewList />
        </div>

        <BooksSidebar />
      </div>
    </>
  )
}
