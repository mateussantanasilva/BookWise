import { SimpleBookCard } from '@/components/SimpleBookCard'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

import BookExampleImage from 'public/images/books/o-hobbit.png'

export function BooksSidebar() {
  return (
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
        <SimpleBookCard
          src={BookExampleImage}
          alt="Capa do livro A revolução dos bichos"
          title="O poder do hábito"
          author="George Orwell"
          size={64}
        />
        <SimpleBookCard
          src={BookExampleImage}
          alt="Capa do livro A revolução dos bichos"
          title="O poder do hábito"
          author="George Orwell"
          size={64}
        />
        <SimpleBookCard
          src={BookExampleImage}
          alt="Capa do livro A revolução dos bichos"
          title="O poder do hábito"
          author="George Orwell"
          size={64}
        />
        <SimpleBookCard
          src={BookExampleImage}
          alt="Capa do livro A revolução dos bichos"
          title="O poder do hábito"
          author="George Orwell"
          size={64}
        />
        <SimpleBookCard
          src={BookExampleImage}
          alt="Capa do livro A revolução dos bichos"
          title="O poder do hábito"
          author="George Orwell"
          size={64}
        />
      </div>
    </aside>
  )
}
