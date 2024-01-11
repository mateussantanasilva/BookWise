'use client'

import { ChangeEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Avatar } from '../Avatar'
import { RatingStars } from '../RatingStars'
import { Check, X } from '@phosphor-icons/react/dist/ssr'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRate } from '@/hooks/useRate'

interface ReviewFormProps {
  bookId: string
  onFormIsVisible: () => void
}

const reviewFormSchema = z.object({
  rate: z.number().gte(1, 'Você deve selecionar a quantidade de estrelas.'),
  description: z
    .string()
    .min(90, 'A avaliação deve ter pelo menos 90 caracteres.'),
})
export type ReviewFormData = z.infer<typeof reviewFormSchema>

export function ReviewForm({ bookId, onFormIsVisible }: ReviewFormProps) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      rate: 0, // used because 'register' wasn't used
    },
  })

  const { data } = useSession()

  const { mutate } = useRate()

  const [counter, setCounter] = useState(0)

  function handleCounter(event: ChangeEvent<HTMLTextAreaElement>) {
    const amountCaracteres = event.target.value.length

    setCounter(amountCaracteres)
  }

  function handleCreateReview(data: ReviewFormData) {
    mutate({ ...data, bookId })

    onFormIsVisible()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateReview)}
      className="rounded-lg bg-gray-700 p-6"
    >
      <div className="mb-6 flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={data?.user.avatar_url ?? ''} alt="Foto de perfil" />

          <p className="font-bold leading-short text-gray-100">
            {data?.user.name}
          </p>
        </div>

        <RatingStars size="1.75rem" setValue={setValue} />
      </div>

      <div className="space-y-2 rounded-md border border-gray-500 bg-gray-800 px-5 py-3.5 text-gray-500 transition-colors focus-within:border-green-200 focus-within:text-green-200">
        <textarea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          {...register('description')}
          onChange={handleCounter}
          className="min-h-[6rem] w-full resize-y bg-transparent text-sm/base text-gray-200 placeholder-gray-400 outline-none"
        ></textarea>

        <div className="ml-auto w-max">
          <span>{counter}</span>
          <span>/450</span>
        </div>
      </div>

      <div className="mt-2 space-y-2 text-sm/short text-gray-200">
        {errors.rate && <p>{errors.rate.message}</p>}

        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div className="mt-3 flex justify-end gap-2">
        <button
          aria-label="Fechar formulário"
          title="Fechar formulário"
          onClick={onFormIsVisible}
          className="rounded bg-gray-600 p-2 text-purple-100 transition-colors hover:bg-gray-500"
        >
          <X size="1.5rem" />
        </button>

        <button
          type="submit"
          aria-label="Enviar avaliação"
          title="Enviar avaliação"
          className="rounded bg-gray-600 p-2 text-green-100 transition-colors hover:bg-gray-500"
        >
          <Check size="1.5rem" />
        </button>
      </div>
    </form>
  )
}
