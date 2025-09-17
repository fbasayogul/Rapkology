import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'
import data from '@/data/data.json'

const saira = Saira({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rapkology',
  description: data[0].attributes.seo.metaDescription,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${saira.className}`}>{children}</body>
    </html>
  )
}
