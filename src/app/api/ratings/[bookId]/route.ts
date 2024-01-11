import { prisma } from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface ApiRatingsParams {
  params: {
    bookId: string
  }
}

export async function GET(request: NextRequest, { params }: ApiRatingsParams) {
  const { bookId } = params

  const ratings = await prisma.rating.findMany({
    where: {
      book_id: bookId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar_url: true,
        },
      },
    },
    orderBy: [
      {
        created_at: 'desc',
      },
    ],
  })

  if (!ratings)
    return NextResponse.json('Ratings with the id book do not exist', {
      status: 404,
    })

  return NextResponse.json(ratings, { status: 200 })
}
