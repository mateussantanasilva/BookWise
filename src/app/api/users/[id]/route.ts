import { prisma } from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface ApiUserParams {
  params: {
    id: string
  }
}

interface MostReadCategory {
  [category: string]: number
}

export async function GET(request: NextRequest, { params }: ApiUserParams) {
  const { id } = params

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) return NextResponse.json('User does not exist', { status: 404 })

  const rawUserStatus = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      created_at: true,
      ratings: {
        select: {
          book: {
            select: {
              total_pages: true,
              name: true,
              author: true,
              categories: {
                select: {
                  category: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

  const accountDate =
    rawUserStatus &&
    `membro desde ${new Date(rawUserStatus.created_at).getFullYear()}`

  const pagesRead = rawUserStatus?.ratings.reduce(
    (numPages, rating) => numPages + rating.book.total_pages,
    0,
  )

  const ratedBooks = rawUserStatus?.ratings.length

  const numAuthors = rawUserStatus?.ratings.reduce(
    (authors: string[], rating) => {
      const author = rating.book.author

      !authors.includes(author) && authors.push(author)

      return authors
    },
    [],
  ).length

  const categoriesCount = rawUserStatus?.ratings.reduce(
    (categoriesCount: MostReadCategory, rating) => {
      rating.book.categories.forEach((category) => {
        const categoryName = category.category.name

        categoriesCount[categoryName]
          ? categoriesCount[categoryName]++
          : (categoriesCount[categoryName] = 1)
      })

      return categoriesCount
    },
    {},
  )

  let mostReadCategory
  let categoryCount = 1

  for (const category in categoriesCount) {
    if (categoriesCount[category] >= categoryCount) {
      mostReadCategory = category
      categoryCount++
    }
  }

  return NextResponse.json(
    {
      accountDate,
      pagesRead,
      ratedBooks,
      numAuthors,
      mostReadCategory,
    },
    { status: 200 },
  )
}
