import { ComponentProps, ForwardedRef, forwardRef } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

type InputProps = ComponentProps<'input'> & {
  maxWidth?: string
}

export const Input = forwardRef(function Input(
  { maxWidth, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div
      className={`flex w-full items-center gap-2 rounded-md border border-gray-500 bg-gray-800 px-5 py-3.5 text-gray-500 transition-colors focus-within:border-green-200 focus-within:text-green-200 ${maxWidth}`}
    >
      <input
        className="w-full bg-transparent text-sm leading-base text-gray-200 placeholder-gray-400 outline-none"
        ref={ref}
        {...props}
      />

      <button type="submit">
        <MagnifyingGlass size="1.25rem" className="h-5 w-5" />
      </button>
    </div>
  )
})
