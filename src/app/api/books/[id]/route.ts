import { prisma } from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface ApiBooksParams {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: ApiBooksParams) {
  const { id } = params

  const book = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      ratings: true,
      categories: {
        select: {
          category: true,
        },
      },
    },
  })

  if (!book)
    return NextResponse.json('The book with specified id does not exist', {
      status: 404,
    })

  return NextResponse.json(book, { status: 200 })
}
