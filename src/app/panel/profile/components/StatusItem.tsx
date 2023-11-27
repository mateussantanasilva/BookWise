import { ElementType } from 'react'

interface StatusItemProps {
  icon: ElementType
  title: string
  content: string
}

export function StatusItem({ icon: Icon, title, content }: StatusItemProps) {
  return (
    <li className="flex items-center gap-5">
      <Icon size="2rem" className="text-green-100" />

      <div className="flex flex-col">
        <strong className="leading-short text-gray-200">{title}</strong>
        <span className="text-sm leading-base text-gray-300">{content}</span>
      </div>
    </li>
  )
}
