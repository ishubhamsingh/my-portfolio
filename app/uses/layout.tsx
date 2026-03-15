import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uses - Shubham Singh',
  description: 'A list of gadgets, tools, and software that Shubham Singh uses daily for work, hobby, and fun.',
  openGraph: {
    title: 'Uses - Shubham Singh',
    description: 'A list of gadgets, tools, and software that Shubham Singh uses daily for work, hobby, and fun.',
    type: 'website',
  },
}

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
