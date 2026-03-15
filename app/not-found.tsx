import { Button } from '@heroui/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h2 className="text-6xl font-bold text-foreground">404</h2>
      <p className="text-xl text-foreground-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button
        as={Link}
        href="/"
        variant="shadow"
        color="primary"
        radius="full"
      >
        Go Home
      </Button>
    </section>
  )
}
