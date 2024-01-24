import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'
import { Book } from '@/@types/book'
import { useId } from 'react'

async function fetchPopularBooks() {
  const { data } = await api.get('/books/popular')

  return data
}

export function usePopular() {
  const id = useId()

  const query = useQuery<Book[]>({
    queryKey: ['popular-books', id],

    queryFn: fetchPopularBooks,
  })

  return query
}
