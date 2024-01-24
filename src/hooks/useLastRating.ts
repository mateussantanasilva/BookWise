import { Rating } from '@/@types/rating'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'

async function fetchRating(userId: string) {
  const { data } = await api.get(`/ratings/user/${userId}/last`)

  return data
}

export function useLastRating(userId: string) {
  const query = useQuery<Rating>({
    queryKey: ['last-rating', userId],

    queryFn: async () => fetchRating(userId),
  })

  return query
}
