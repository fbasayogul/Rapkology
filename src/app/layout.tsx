import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'

const saira = Saira({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CodeZone',
  description: 'CodeZone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className}`}>{children}</body>
    </html>
  )
}
