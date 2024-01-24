export interface User {
  id: string
  name: string
  avatar_url: string
}

export interface UserStatus {
  accountDate: string
  pagesRead: number
  ratedBooks: number
  numAuthors: number
  mostReadCategory: string
}
