'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/Input'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { categories } from '../../../../../prisma/constants/categories'
import { Binoculars } from '@phosphor-icons/react/dist/ssr'

interface FilterFormProps {
  onSetFilter: (query: string) => void
  onSetCategory: (category: string) => void
}

const filterFormSchema = z.object({
  bookOrAuthor: z.string(),
})
export type FilterFormData = z.infer<typeof filterFormSchema>

export function FilterForm({ onSetFilter, onSetCategory }: FilterFormProps) {
  const { register, handleSubmit } = useForm<FilterFormData>({
    resolver: zodResolver(filterFormSchema),
  })

  async function handleFilterBooks({ bookOrAuthor }: FilterFormData) {
    onSetFilter(bookOrAuthor)
  }

  return (
    <form onSubmit={handleSubmit(handleFilterBooks)} className="mr-24">
      <header className="mb-10 flex w-full justify-between gap-4 pt-[4.5rem]">
        <div className="flex items-center gap-3">
          <Binoculars size="2rem" className="text-green-100" />
          <h1 className="text-2xl font-bold leading-short text-gray-100">
            Explorar
          </h1>
        </div>

        <Input
          placeholder="Buscar livro ou autor"
          {...register('bookOrAuthor')}
          maxWidth="max-w-[27rem]"
        />
      </header>

      <RadioGroup.Root
        defaultValue="Tudo"
        onValueChange={(category) => onSetCategory(category)}
        className="flex gap-3"
      >
        {categories.map((category) => {
          return (
            <label key={category.id}>
              <RadioGroup.Item
                value={category.name}
                className="rounded-full border border-purple-100 px-4 py-1 text-base/base text-purple-100 transition-colors hover:border-purple-100 hover:bg-purple-200 hover:text-gray-100 data-[state=checked]:border-purple-200 data-[state=checked]:bg-purple-200 data-[state=checked]:text-gray-100"
              >
                <span>{category.name}</span>
              </RadioGroup.Item>
            </label>
          )
        })}
      </RadioGroup.Root>
    </form>
  )
}
