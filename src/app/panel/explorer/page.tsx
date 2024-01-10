'use client'

import { FilterForm } from './components/FilterForm'
import { BookList } from './components/BookList'
import { useState } from 'react'
import { useBook } from '@/hooks/useBook'

export default function Explorer() {
  const [filter, setFilter] = useState<string | undefined>(undefined)
  const [category, setCategory] = useState('Tudo')

  const { data: bookList } = useBook({ filter, category })

  return (
    <>
      <FilterForm onSetFilter={setFilter} onSetCategory={setCategory} />

      {bookList && <BookList bookList={bookList} />}
    </>
  )
}
