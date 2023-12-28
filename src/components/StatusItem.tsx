import { ElementType } from 'react'

interface StatusItemProps {
  icon: ElementType
  title: string
  content: string
  size?: 'md' | 'lg'
}

export function StatusItem({
  icon: Icon,
  title,
  content,
  size = 'md',
}: StatusItemProps) {
  if (size === 'md')
    return (
      <li className="flex items-center gap-5">
        <Icon size="2rem" className="text-green-100" />

        <div className="flex flex-col">
          <strong className="leading-short text-gray-200">{title}</strong>
          <span className="text-sm leading-base text-gray-300">{content}</span>
        </div>
      </li>
    )

  if (size === 'lg') {
    return (
      <li className="flex items-center gap-4">
        <Icon size="1.5rem" className="text-green-100" />

        <div className="flex flex-col">
          <span className="text-sm/base text-gray-300">{title}</span>
          <strong className="leading-short text-gray-200">{content}</strong>
        </div>
      </li>
    )
  }
}
