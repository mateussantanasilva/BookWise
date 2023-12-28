import * as Input from '@/components/Input'
import { CategoryList } from './components/CategoryList'
import { BookList } from './components/BookList'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export default function Explorer() {
  return (
    <>
      <form className="mr-24">
        <header className="mb-10 flex w-full justify-between gap-4 pt-[4.5rem]">
          <div className="flex items-center gap-3">
            <Binoculars size="2rem" className="text-green-100" />
            <h1 className="text-2xl font-bold leading-short text-gray-100">
              Explorar
            </h1>
          </div>

          <Input.Root className="max-w-[27rem]">
            <Input.Control placeholder="Buscar livro ou autor" />

            <Input.Suffix>
              <MagnifyingGlass size="1.25rem" className="h-5 w-5" />
            </Input.Suffix>
          </Input.Root>
        </header>

        <CategoryList />
      </form>

      <BookList />
    </>
  )
}
