import { Rating } from '@/@types/rating'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'
import { useId } from 'react'

async function fetchRatings() {
  const { data } = await api.get(`/ratings`)

  return data
}

export function useRating() {
  const id = useId()

  const query = useQuery<Rating[]>({
    queryKey: ['rating-list', id],

    queryFn: fetchRatings,
  })

  return query
}
