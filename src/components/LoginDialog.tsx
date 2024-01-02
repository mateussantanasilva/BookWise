'use client'

import * as Dialog from '@radix-ui/react-dialog'
import * as SignInCard from '@/components/SignInCard'
import { X } from '@phosphor-icons/react'

import IconGoogleImage from 'public/images/icon-google.svg'
import IconGithubImage from 'public/images/icon-github.svg'

export function LoginDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-2 py-1 font-bold leading-base text-purple-100 transition-colors hover:rounded hover:bg-link-purple">
        Avaliar
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="absolute left-0 top-0 z-30 h-screen w-screen bg-overlay" />

        <Dialog.Content className="absolute left-1/2 top-0 z-40 flex h-fit w-login-dialog -translate-x-1/2 translate-y-1/2 flex-col items-center rounded-xl bg-gray-700 p-4 shadow-md">
          <Dialog.Close
            className="mb-4 ml-auto flex text-gray-400 transition-colors hover:text-gray-100"
            aria-label="Fechar modal"
            title="Fechar modal"
          >
            <X size="1.5rem" />
          </Dialog.Close>

          <Dialog.Title className="mb-10 text-center font-bold leading-short text-gray-200">
            Faça login para deixar sua avaliação
          </Dialog.Title>

          <div className="max-w-login-dialog mb-14 flex w-buttons-dialog flex-col gap-4">
            <SignInCard.Root>
              <SignInCard.Content
                icon={IconGoogleImage}
                text="Logo do google"
                content="Entrar com Google"
              />
            </SignInCard.Root>

            <SignInCard.Root>
              <SignInCard.Content
                icon={IconGithubImage}
                text="Logo do github"
                content="Entrar com GitHub"
              />
            </SignInCard.Root>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
