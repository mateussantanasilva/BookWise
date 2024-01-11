import { useMutation } from '@tanstack/react-query'
import { ApiRatingsRequest } from '@/app/api/ratings/route'
import { api } from '@/libs/axios'

async function createRating(rating: ApiRatingsRequest) {
  const { data } = await api.post('/ratings', rating)

  return data
}

export function useRate() {
  const mutation = useMutation({
    mutationFn: createRating,
  })

  return mutation
}
