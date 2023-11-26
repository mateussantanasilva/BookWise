import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'BookWise',
  description:
    'Plataforma de recomendações para leitores, um lugar onde eles possam avaliar e ver avaliações de outros leitores sobre os mais diversos livros.',
  keywords: ['livro, avaliação, leitor, recomendação, leitura'],
  authors: [
    {
      name: 'Mateus Santana',
      url: 'https://github.com/mateussantanasilva',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
