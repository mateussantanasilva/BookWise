import { ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="w-full bg-transparent text-sm leading-base text-gray-200 placeholder-gray-400 outline-none"
      {...props}
    />
  )
}
