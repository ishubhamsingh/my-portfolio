'use server'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/app/types'

const postsDirectory = path.join(process.cwd(), 'posts');

let allPostsCache: Post[] | null = null
const postCache: Record<string, Post> = {}

export async function getSortedPostsData() {
  // Return cached list when running in production
  if (process.env.NODE_ENV === 'production' && allPostsCache) return allPostsCache

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        title: string,
        description: string,
        headerImage?: string,
        categories: string[], 
        date: string,
        authorName: string,
        authorAvatar: string,
        published: boolean
      }),
    };
  });
  // Sort posts by date
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  const published = sortedPosts.filter((post) => post.published === true)

  if (process.env.NODE_ENV === 'production') allPostsCache = published

  return published
}

export async function getPostsByTag(query: string) {
  const allPosts = await getSortedPostsData()

  return allPosts.filter((post) => post.categories.filter((i: string) => i.includes(query.toLowerCase())).length > 0 || post.title.toLowerCase().includes(query.toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase()))
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostData(id: string) {
  // Return cached post in production to avoid repeated fs + parsing
  if (process.env.NODE_ENV === 'production' && postCache[id]) return postCache[id]

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const contentMd = matterResult.content.toString()

  // Combine the data with the id
  const post = {
    id,
    contentMd,
    ...(matterResult.data as {
      title: string,
      description: string,
      headerImage?: string,
      categories: string[],
      date: string,
      authorName: string,
      authorAvatar: string,
      published: boolean
    }),
  }

  if (process.env.NODE_ENV === 'production') postCache[id] = post

  return post
}

