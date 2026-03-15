import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume - Shubham Singh',
  description: 'Resume of Shubham Singh - Software Engineer specializing in Android, Kotlin, and React.',
  openGraph: {
    title: 'Resume - Shubham Singh',
    description: 'Resume of Shubham Singh - Software Engineer specializing in Android, Kotlin, and React.',
    type: 'profile',
  },
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
