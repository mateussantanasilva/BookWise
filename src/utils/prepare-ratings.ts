import { Rating } from '@/@types/rating'

export function prepareRatings(ratings: Rating[]) {
  const hasOnlyOneRating = ratings.length === 1 && `${ratings.length} avaliação`
  const amountRatings = hasOnlyOneRating || `${ratings.length} avaliações`

  const sumOfRatings = ratings.reduce(
    (average, rating) => average + rating.rate,
    0, // _, initial value
  )
  const averageRating = Math.floor(sumOfRatings / ratings.length)

  return {
    amountRatings,
    averageRating,
  }
}
