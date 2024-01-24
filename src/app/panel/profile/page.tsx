import { CaretLeft, User } from '@phosphor-icons/react/dist/ssr'
import { FilterForm } from './components/FilterForm'

export default function Profile() {
  return (
    <>
      <header className="mb-10 flex items-center gap-3 pt-[4.5rem]">
        <User size="2rem" className="text-green-100" />
        <h1 className="text-2xl font-bold leading-short text-gray-100">
          Perfil
        </h1>

        {/* <button className="hover:bg-link-white flex items-center gap-3 px-2 py-1 font-bold leading-base text-gray-200 transition-colors hover:rounded">
          <CaretLeft size="1.25rem" />
          <span>Voltar</span>
        </button> */}
      </header>

      <FilterForm />
    </>
  )
}
