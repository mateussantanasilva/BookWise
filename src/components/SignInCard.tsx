import Image from 'next/image'

import IconGoogleImage from 'public/images/icon-google.svg'
import IconGithubImage from 'public/images/icon-github.svg'
import IconVisitorImage from 'public/images/icon-visitor.svg'

interface SignInCardProps {
  variant?: 'google' | 'github' | 'visitor'
}

export function SignInCard({ variant = 'visitor' }: SignInCardProps) {
  const selectedVariant = {
    icon: IconVisitorImage,
    text: 'Logo de um foguete',
    content: 'Acessar como visitante',
  }

  switch (variant) {
    case 'google':
      selectedVariant.icon = IconGoogleImage
      selectedVariant.text = 'Logo do google'
      selectedVariant.content = 'Entrar com Google'
      break
    case 'github':
      selectedVariant.icon = IconGithubImage
      selectedVariant.text = 'Logo do github'
      selectedVariant.content = 'Entrar com GitHub'
      break
  }

  return (
    <button className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500">
      <Image
        src={selectedVariant.icon}
        alt={selectedVariant.text}
        width={32}
        height={32}
      />

      <p className="text-lg font-bold leading-base text-gray-200">
        {selectedVariant.content}
      </p>
    </button>
  )
}
