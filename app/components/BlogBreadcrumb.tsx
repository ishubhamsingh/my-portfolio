'use client'

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react'

export default function BlogBreadcrumb({ title }: { title: string }) {
  return (
    // The current item is a whole post title, which is far wider than a phone
    // screen. Let the trail wrap, and truncate the title itself, so a long
    // title cannot push the page wider than the viewport.
    <Breadcrumbs className='mb-4 max-w-full' size='lg' classNames={{ list: 'flex-wrap' }}>
      <BreadcrumbItem href='/'>Home</BreadcrumbItem>
      <BreadcrumbItem href='/blogs'>Blogs</BreadcrumbItem>
      {/* min-w-0 on the item: as a flex child it defaults to min-width:auto and
          refuses to shrink below its text, so the wrap below never engages. */}
      <BreadcrumbItem
        isCurrent
        classNames={{ base: 'min-w-0', item: 'whitespace-normal break-words' }}
      >
        {title}
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}
