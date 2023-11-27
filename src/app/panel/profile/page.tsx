'use client'

import { PrivateReviewPost } from './components/PrivateReviewPost'
import { ProfileSidebar } from './components/ProfileSidebar'
import { SearchFilter } from './components/SearchFilter'
import { User } from '@phosphor-icons/react'

export default function Profile() {
  return (
    <>
      <header className="mb-10 flex items-center gap-3 pt-[4.5rem]">
        <User size="2rem" className="text-green-100" />
        <h1 className="text-2xl font-bold leading-short text-gray-100">
          Perfil
        </h1>
      </header>

      <div className="grid-cols-profile mb-4 grid gap-16">
        <div>
          <SearchFilter />

          <section className="space-y-6">
            <PrivateReviewPost />
            <PrivateReviewPost />
          </section>
        </div>

        <ProfileSidebar />
      </div>
    </>
  )
}
