import { ReviewFormData } from '@/components/BookDialog/ReviewForm'
import { authOptions } from '@/libs/next-auth'
import { prisma } from '@/libs/prisma'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

export interface ApiRatingsRequest extends ReviewFormData {
  bookId: string
}

export async function POST(request: NextRequest) {
  const { rate, description, bookId }: ApiRatingsRequest = await request.json()

  const session = await getServerSession(authOptions)

  if (!session) return NextResponse.json('Session error', { status: 401 })

  const ratingAlreadyExist = await prisma.rating.findFirst({
    where: {
      user_id: session.user.id,
      book_id: bookId,
    },
  })

  if (ratingAlreadyExist)
    return NextResponse.json('Rating already exists for this book', {
      status: 400,
    })

  const ratingCreated = await prisma.rating.create({
    data: {
      rate,
      description,
      book_id: bookId,
      user_id: session.user.id,
    },
  })

  return NextResponse.json(ratingCreated, { status: 201 })
}
