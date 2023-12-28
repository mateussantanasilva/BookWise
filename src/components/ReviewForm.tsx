import { Avatar } from './Avatar'
import { RatingStars } from './RatingStars'

import AvatarExampleImage from 'public/images/avatar-example.png'

export function ReviewForm() {
  return (
    <form>
      <div className="mb-5 flex justify-between">
        <div className="flex gap-4">
          <Avatar src={AvatarExampleImage} alt="Foto de perfil" />

          <p className="font-bold leading-base text-gray-100">Jaxson Dias</p>
        </div>

        <RatingStars rating={0} />
      </div>

      <textarea name="" id="" />

      <div>
        <button></button>
      </div>
    </form>
  )
}
