import { useMutation } from '@tanstack/react-query'
import { ApiRatingsRequest } from '@/app/api/ratings/new/route'
import { api } from '@/libs/axios'

async function createRating(rating: ApiRatingsRequest) {
  const { data } = await api.post('/ratings/new', rating)

  return data
}

export function useRate() {
  const mutation = useMutation({
    mutationFn: createRating,
  })

  return mutation
}
