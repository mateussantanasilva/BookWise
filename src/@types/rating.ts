import { Book } from './book'
import { User } from './user'

export interface Rating {
  id: string
  rate: number
  description: string
  created_at: string
  user: User
  book: Book
}
