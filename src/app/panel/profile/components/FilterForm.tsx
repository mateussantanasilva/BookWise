'use client'

import { Input } from '@/components/Input'
import { ProfileReviewList } from './ProfileReviewList'
import { ProfileSidebar } from './ProfileSidebar'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const filterFormSchema = z.object({
  filter: z.string(),
})
type FilterFormData = z.infer<typeof filterFormSchema>

export function FilterForm() {
  const [filter, setFilter] = useState<null | string>(null)

  const { handleSubmit, register } = useForm<FilterFormData>({
    resolver: zodResolver(filterFormSchema),
  })

  function handleFilterQuery({ filter }: FilterFormData) {
    setFilter(filter)
  }

  return (
    <div className="mb-4 grid grid-cols-profile gap-16">
      <div>
        <form onSubmit={handleSubmit(handleFilterQuery)}>
          <Input placeholder="Buscar livro avaliado" {...register('filter')} />
        </form>

        <ProfileReviewList filter={filter} />
      </div>

      <ProfileSidebar />
    </div>
  )
}
