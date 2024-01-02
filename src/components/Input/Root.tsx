import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'> & {
  className?: string
}

export function Root({ className, ...props }: RootProps) {
  return (
    <div
      className={`flex w-full items-center gap-2 rounded-md border border-gray-500 bg-gray-800 px-5 py-3.5 text-gray-500 transition-colors focus-within:border-green-200 focus-within:text-green-200 ${className}`}
      {...props}
    />
  )
}
