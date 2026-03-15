import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs - Shubham Singh',
  description: 'Technical blog posts about Android, Kotlin, Compose Multiplatform, React, and software engineering by Shubham Singh.',
  openGraph: {
    title: 'Blogs - Shubham Singh',
    description: 'Technical blog posts about Android, Kotlin, Compose Multiplatform, React, and software engineering.',
    type: 'website',
  },
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
