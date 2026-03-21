'use client'

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react'

export default function BlogBreadcrumb({ title }: { title: string }) {
  return (
    <Breadcrumbs className='mb-4' size='lg'>
      <BreadcrumbItem href='/'>Home</BreadcrumbItem>
      <BreadcrumbItem href='/blogs'>Blogs</BreadcrumbItem>
      <BreadcrumbItem isCurrent>{title}</BreadcrumbItem>
    </Breadcrumbs>
  )
}
