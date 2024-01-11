import { CompleteBook } from '@/@types/book'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchBookById(id: string) {
  const { data } = await api.get(`/books/${id}`)

  return data
}

export function useBookById(id: string) {
  const query = useQuery<CompleteBook>({
    queryKey: ['bookById', id],

    queryFn: async () => await fetchBookById(id),
  })

  return query
}
