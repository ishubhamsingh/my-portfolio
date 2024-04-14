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

export default function sitemap(): MetadataRoute.Sitemap {
    let sitemap: Sitemap = [
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
    ]

    getSortedPostsData().then(
        (allPosts) => {
            allPosts.map((post) => {
                sitemap.push(
                    {
                        url: `${BASE_URL}/blogs/post/${post.id}`,
                        lastModified: new Date(),
                        changeFrequency: 'weekly',
                        priority: 0.9
                    }
                )
            });
        }
    ).catch((e) =>
        console.error(e)
    ).finally(() => {
        return sitemap
    })

    return sitemap
}