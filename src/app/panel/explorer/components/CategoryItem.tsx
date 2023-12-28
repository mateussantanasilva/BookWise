'use client'

import * as Checkbox from '@radix-ui/react-checkbox'

type CategoryItemProps = Checkbox.CheckboxProps & {
  title: string
}

export function CategoryItem({ title, ...props }: CategoryItemProps) {
  return (
    <label>
      <Checkbox.Root
        className="rounded-full border border-purple-100 px-4 py-1 text-base/base text-purple-100 transition-colors hover:border-purple-100 hover:bg-purple-200 hover:text-gray-100 data-[state=checked]:border-purple-200 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
        {...props}
      >
        <span>{title}</span>
      </Checkbox.Root>
    </label>
  )
}
