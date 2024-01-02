import * as Input from '@/components/Input'
import { PrivateReviewPost } from './components/PrivateReviewPost'
import { ProfileSidebar } from './components/ProfileSidebar'
import {
  CaretLeft,
  MagnifyingGlass,
  User,
} from '@phosphor-icons/react/dist/ssr'

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

      <div className="mb-4 grid grid-cols-profile gap-16">
        <div>
          <form>
            <Input.Root>
              <Input.Control placeholder="Buscar livro avaliado" />

              <Input.Suffix>
                <MagnifyingGlass size="1.25rem" className="h-5 w-5" />
              </Input.Suffix>
            </Input.Root>
          </form>

          <section className="mt-8 space-y-6">
            <PrivateReviewPost />
            <PrivateReviewPost />
          </section>
        </div>

        <ProfileSidebar />
      </div>
    </>
  )
}
