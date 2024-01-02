import { ComponentProps } from 'react'

type SuffixProps = ComponentProps<'div'>

export function Suffix(props: SuffixProps) {
  return <div {...props} />
}
