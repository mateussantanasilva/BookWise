import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar_url: true,
        },
      },
      book: {
        select: {
          id: true,
          cover_url: true,
          name: true,
          author: true,
        },
      },
    },
  })

  if (!ratings)
    return NextResponse.json('Rating list does not exist', { status: 404 })

  return NextResponse.json(ratings, { status: 200 })
}
