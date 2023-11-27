import Image from 'next/image'
import { ComponentProps } from 'react'

type AvatarProps = ComponentProps<typeof Image> & {
  size?: 32 | 40 | 72
}

export function Avatar({ size = 40, ...props }: AvatarProps) {
  return (
    <div className="h-fit w-fit rounded-full bg-gradient-vertical p-[1px]">
      <Image
        {...props}
        src={props.src}
        alt={props.alt}
        width={size}
        height={size}
        className="rounded-full"
      />
    </div>
  )
}
