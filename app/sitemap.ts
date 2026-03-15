import { MetadataRoute } from "next";
import { getSortedPostsData } from "@/lib/posts";
import { BASE_URL } from '@/app/constants'

type Sitemap = Array<{
    url: string
    lastModified?: string | Date
    changeFrequency?:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never'
    priority?: number
  }>

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const sitemap: Sitemap = [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${BASE_URL}/resume`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: `${BASE_URL}/uses`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },
    ]

    const allPosts = await getSortedPostsData()
    for (const post of allPosts) {
        sitemap.push({
            url: `${BASE_URL}/blogs/post/${post.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9
        })
    }

    return sitemap
}