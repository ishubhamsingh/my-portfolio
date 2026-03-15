'use client'

import { Button } from '@heroui/react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h2 className="text-4xl font-bold text-foreground">Something went wrong</h2>
      <p className="text-lg text-foreground-500">
        An unexpected error occurred. Please try again.
      </p>
      <Button
        variant="shadow"
        color="primary"
        radius="full"
        onPress={() => reset()}
      >
        Try again
      </Button>
    </section>
  )
}
