import Image from 'next/image'

import BgLoginImage from 'public/images/bg-login.png'
import IconGoogleImage from 'public/images/icon-google.svg'
import IconGithubImage from 'public/images/icon-github.svg'
import IconVisitorImage from 'public/images/icon-visitor.svg'

export default function Home() {
  return (
    <main className="grid-cols-login grid max-md:grid-cols-1">
      <div className="h-screen p-5 max-md:hidden">
        <Image
          src={BgLoginImage}
          alt="Pessoa lendo de fundo um livro com a logo da BookWise no meio da imagem"
          quality={100}
          width={598}
          priority
          className="max-w-login h-full rounded-xl object-cover"
        />
      </div>

      <section className="mx-auto flex w-full max-w-[24.5rem] flex-col justify-center pr-5 text-start max-md:h-screen max-md:pl-5">
        <h1 className="leading-shorter mb-[0.125] text-2xl font-bold text-gray-100">
          Boas vindas!
        </h1>
        <p className="leading-base mb-10 text-base text-gray-200">
          Faça seu login ou acesse como visitante.
        </p>

        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500">
            <Image
              src={IconGoogleImage}
              alt="Logo do google"
              width={32}
              height={32}
            />

            <p className="leading-base text-lg font-bold text-gray-200">
              Entrar com Google
            </p>
          </button>

          <button className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500">
            <Image
              src={IconGithubImage}
              alt="Logo do google"
              width={32}
              height={32}
            />

            <p className="leading-base text-lg font-bold text-gray-200">
              Entrar com GitHub
            </p>
          </button>

          <button className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500">
            <Image
              src={IconVisitorImage}
              alt="Logo do google"
              width={32}
              height={32}
            />

            <p className="leading-base text-lg font-bold text-gray-200">
              Acessar como visitante
            </p>
          </button>
        </div>
      </section>
    </main>
  )
}
