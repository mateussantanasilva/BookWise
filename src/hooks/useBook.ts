import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'
import { Book } from '@/@types/book'

export interface ApiParams {
  filter?: string
  category?: string
}

async function fetchBooks({ filter, category }: ApiParams) {
  const params: ApiParams = {}

  filter && (params.filter = filter)
  if (category && category !== 'Tudo') params.category = category

  const { data } = await api.get('/books', {
    params,
  })

  return data
}

export function useBook({ filter, category }: ApiParams) {
  const query = useQuery<Book[]>({
    queryKey: ['book-list', category, filter],

    queryFn: async () => await fetchBooks({ filter, category }),
  })

  return query
}
