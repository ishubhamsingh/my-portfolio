import * as React from 'react'
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from './components/NavbarComponent'
import Footer from './components/FooterComponent'
import { Providers } from './providers'
import { WebVitals } from './components/web-vitals';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next'
import { BASE_URL } from './constants';
import SnowfallComponent from './components/SnowfallComponent';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Shubham Singh - Software Engineer',
  description: 'Personal portfolio & blog of Shubham Singh - Software Engineer | Android | Kotlin | ReactJs',
  creator: 'Shubham Singh',
  keywords: ['shubham singh', 'ishubhamsingh', "kotlin", "india", "android", "bengaluru", "react js", "aospextended"],
  openGraph: {
    type: 'profile',
    images: [{url: '/images/shubham-singh-social-media-banner.png'}]
  },
  twitter: {
    images: '/images/shubham-singh-social-media-banner.png'
  }
}

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
        <SnowfallComponent />  
        <Navbar />
        <WebVitals />
        {children}
        <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  )
}
