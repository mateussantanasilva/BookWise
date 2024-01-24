import { prisma } from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface ApiLastRatingParams {
  params: {
    userId: string
  }
}

export async function GET(
  request: NextRequest,
  { params }: ApiLastRatingParams,
) {
  const { userId } = params

  const lastRating = await prisma.rating.findFirst({
    where: {
      user_id: userId,
    },
    include: {
      book: {
        select: {
          id: true,
          name: true,
          author: true,
          cover_url: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  if (!lastRating)
    return NextResponse.json('User has no ratings', { status: 404 })

  return NextResponse.json(lastRating, { status: 200 })
}
