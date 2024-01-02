import { Avatar } from './Avatar'
import * as Input from './Input'
import { RatingStars } from './RatingStars'
import { Check, X } from '@phosphor-icons/react/dist/ssr'

import AvatarExampleImage from 'public/images/avatar-example.png'

export function ReviewForm() {
  return (
    <form className="rounded-lg bg-gray-700 p-6">
      <div className="mb-6 flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={AvatarExampleImage} alt="Foto de perfil" />

          <p className="font-bold leading-short text-gray-100">Jaxson Dias</p>
        </div>

        <RatingStars rating={0} size="1.75rem" />
      </div>

      <Input.Root>
        <Input.Control
          placeholder="Escreva sua avaliação"
          maxLength={450}
        ></Input.Control>

        <div>
          <span>0</span>
          <span>/450</span>
        </div>
      </Input.Root>

      <div className="mt-3 flex justify-end gap-2">
        <button
          aria-label="Fechar formulário"
          title="Fechar formulário"
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
