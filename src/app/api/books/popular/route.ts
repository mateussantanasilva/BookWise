import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const popularBooks = await prisma.book.findMany({
    take: 5, // limit
    orderBy: {
      ratings: { _count: 'desc' },
    },
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  })

  if (!popularBooks)
    return NextResponse.json('Popular books does not exist', {
      status: 404,
    })

  return NextResponse.json(popularBooks, { status: 200 })
}
