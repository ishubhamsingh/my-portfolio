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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Shubham Singh',
              url: BASE_URL,
              jobTitle: 'Software Engineer',
              knowsAbout: ['Android', 'Kotlin', 'Jetpack Compose', 'React', 'TypeScript'],
              sameAs: [
                'https://github.com/ishubhamsingh',
              ],
            }),
          }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
          Skip to content
        </a>
        <Providers>
        <SnowfallComponent />
        <Navbar />
        <WebVitals />
        <main id="main-content">
        {children}
        </main>
        <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  )
}
