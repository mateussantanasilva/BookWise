import { UserStatus } from '@/@types/user'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'

async function fecthStatus(id: string) {
  const { data } = await api.get(`/users/${id}`)

  return data
}

export function useStatus(id: string) {
  const query = useQuery<UserStatus>({
    queryKey: ['status', id],

    queryFn: () => fecthStatus(id),
  })

  return query
}
