import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchFilter() {
  return (
    <form className="mb-8 flex items-center gap-2 rounded-md border border-gray-500 bg-gray-800 px-5 py-4 text-gray-500 transition-colors focus-within:border-green-200 focus-within:text-green-200">
      <input
        type="text"
        placeholder="Buscar livro avaliado"
        className="w-full bg-transparent text-sm leading-base text-gray-200 placeholder-gray-400 outline-none"
      />
      <MagnifyingGlass size="1.25rem" className="h-5 w-5" />
    </form>
  )
}
