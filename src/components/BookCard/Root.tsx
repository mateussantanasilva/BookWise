import Link from 'next/link'
import { ComponentProps } from 'react'

type RootProps = ComponentProps<'article' | typeof Link>

export function Root(props: RootProps) {
  if ('href' in props) {
    return (
      <Link
        className="flex gap-5 rounded-lg bg-gray-700 px-5 py-4 transition-shadow hover:ring-2 hover:ring-gray-600"
        {...props}
      />
    )
  }

  return (
    <article
      className="flex gap-5 rounded-lg bg-gray-700 px-5 py-4 transition-shadow hover:ring-2 hover:ring-gray-600"
      {...props}
    />
  )
}
