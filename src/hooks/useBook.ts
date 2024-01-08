import { useId } from 'react'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'
import { Book } from '@/@types/book'

async function fetchBooks() {
  const { data } = await api.get('/books')

  return data
}

export function useBook() {
  const id = useId()

  const query = useQuery<Book[]>({
    queryKey: ['book-list', id],

    queryFn: fetchBooks,
  })

  return query
}
