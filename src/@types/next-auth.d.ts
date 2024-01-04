/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    image: string
  }

  interface Session {
    user: User
  }
}
