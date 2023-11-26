import Image from 'next/image'
import { SignInCard } from '@/components/SignInCard'

import BgLoginImage from 'public/images/bg-login.png'

export default function Home() {
  return (
    <main className="grid grid-cols-login max-md:grid-cols-1">
      <div className="h-screen p-5 max-md:hidden">
        <Image
          src={BgLoginImage}
          alt="Pessoa lendo de fundo um livro com a logo da BookWise no meio da imagem"
          quality={100}
          width={598}
          priority
          className="h-full max-w-login rounded-xl object-cover"
        />
      </div>

      <section className="mx-auto flex w-full max-w-[24.5rem] flex-col justify-center pr-5 text-start max-md:h-screen max-md:pl-5">
        <h1 className="mb-[0.125] text-2xl font-bold leading-shorter text-gray-100">
          Boas vindas!
        </h1>
        <p className="mb-10 text-base leading-base text-gray-200">
          Faça seu login ou acesse como visitante.
        </p>

        <div className="flex flex-col gap-4">
          <SignInCard variant="google" />

          <SignInCard variant="github" />

          <SignInCard />
        </div>
      </section>
    </main>
  )
}
