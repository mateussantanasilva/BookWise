import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const filter = searchParams.get('filter')
  const category = searchParams.get('category')

  const bookList = await prisma.book.findMany({
    where: {
      ...(filter && {
        OR: [
          {
            name: {
              contains: filter,
            },
          },
          {
            author: {
              contains: filter,
            },
          },
        ],
      }),
      ...(category && {
        categories: {
          some: {
            category: {
              name: category,
            },
          },
        },
      }),
    },
    include: {
      ratings: true,
    },
  })

  if (!bookList)
    return NextResponse.json('Book list does not exist', {
      status: 404,
    })

  return NextResponse.json(bookList, { status: 200 })
}
