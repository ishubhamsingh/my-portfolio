import { CircularProgress } from '@heroui/react'

export default function Loading() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <CircularProgress size="lg" aria-label="Loading..." />
    </section>
  )
}
