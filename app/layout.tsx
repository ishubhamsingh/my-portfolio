import * as React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/NavbarComponent'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Shubham Singh',
  description: 'Personal portfolio & blog of Shubham Singh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
        <Navbar />
        {children}
        </Providers>
        </body>
    </html>
  )
}
