import { prisma } from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface ApiUserRatingsParams {
  params: {
    userId: string
  }
}

export async function GET(
  request: NextRequest,
  { params }: ApiUserRatingsParams,
) {
  const searchParams = request.nextUrl.searchParams
  const filter = searchParams.get('filter')

  const { userId } = params

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId,

      ...(filter && {
        book: {
          name: {
            contains: filter,
          },
        },
      }),
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

  if (!ratings)
    return NextResponse.json('Rating list does not exist', { status: 404 })

  return NextResponse.json(ratings, { status: 200 })
}
