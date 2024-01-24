import { Rating } from '@/@types/rating'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'

export interface ApiParams {
  bookId?: string
  userId?: string
  filter?: string | null
}

async function fetchRatings({ bookId, userId, filter }: ApiParams) {
  const params: ApiParams = {}

  filter && (params.filter = filter)
  const url = bookId ? `/ratings/${bookId}` : `/ratings/user/${userId}`

  const { data } = await api.get(url, { params })

  return data
}

export function useRatingById({ bookId, userId, filter }: ApiParams) {
  const queryKey = bookId
    ? ['ratings-by-book-id', bookId]
    : ['ratings-by-user-id', userId, filter]

  const query = useQuery<Rating[]>({
    queryKey,

    queryFn: async () => fetchRatings({ bookId, userId, filter }),

    refetchOnMount: !!bookId && true, // after creating a new rating
  })

  return query
}
