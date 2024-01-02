import Link from 'next/link'
import { ComponentProps } from 'react'

type RootProps = ComponentProps<'button' | typeof Link>

export function Root(props: RootProps) {
  if ('href' in props) {
    return (
      <Link
        className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500"
        {...props}
      />
    )
  }

  return (
    <button
      className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 transition-shadow hover:ring-2 hover:ring-gray-500"
      {...props}
    />
  )
}
