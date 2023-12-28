import Image, { StaticImageData } from 'next/image'

interface SignInCardProps {
  icon: StaticImageData
  text: string
  content: string
}

export function SignInCard({ icon, text, content }: SignInCardProps) {
  return (
    <button className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500">
      <Image src={icon} alt={text} width={32} height={32} />

      <p className="text-lg font-bold leading-base text-gray-200">{content}</p>
    </button>
  )
}
