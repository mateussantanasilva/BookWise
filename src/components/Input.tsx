import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'> & {
  className?: string
}

export function Root({ className, ...props }: InputRootProps) {
  return (
    <div
      className={`flex w-full items-center gap-2 rounded-md border border-gray-500 bg-gray-800 px-5 py-3.5 text-gray-500 transition-colors focus-within:border-green-200 focus-within:text-green-200 ${className}`}
      {...props}
    />
  )
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="w-full bg-transparent text-sm leading-base text-gray-200 placeholder-gray-400 outline-none"
      {...props}
    />
  )
}

type InputSuffixProps = ComponentProps<'div'>

export function Suffix(props: InputSuffixProps) {
  return <div {...props} />
}
