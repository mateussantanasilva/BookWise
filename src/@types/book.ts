import { Category } from './category'
import { Rating } from './rating'

export interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  ratings: Rating[]
}

export interface CompleteBook extends Book {
  categories: Category[]
}
