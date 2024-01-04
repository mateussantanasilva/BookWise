import Image, { StaticImageData } from 'next/image'

interface ContentProps {
  icon: StaticImageData
  text: string
  content: string
}

export function Content({ icon, text, content }: ContentProps) {
  return (
    <>
      <Image src={icon} alt={text} width={32} height={32} />

      <p className="text-lg font-bold leading-base text-gray-200">{content}</p>
    </>
  )
}
