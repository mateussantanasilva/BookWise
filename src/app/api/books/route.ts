import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const bookList = await prisma.book.findMany()

  if (!bookList)
    return NextResponse.json('Book list does not exist', {
      status: 404,
    })

  return NextResponse.json(bookList, { status: 200 })
}
