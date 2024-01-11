import { Rating } from '@/@types/rating'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchRatings(bookId: string) {
  const { data } = await api.get(`/ratings/${bookId}`)

  return data
}

export function useRating(bookId: string) {
  const query = useQuery<Rating[]>({
    queryKey: ['rating', bookId],

    queryFn: async () => fetchRatings(bookId),

    refetchOnMount: true, // after creating a new rating
  })

  return query
}
