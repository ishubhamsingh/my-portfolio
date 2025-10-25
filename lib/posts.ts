'use server'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified'  
import parse from 'remark-parse';  
import remark2rehype from "remark-rehype";   
import html from 'rehype-stringify';
import addClasses from 'rehype-class-names';
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'posts');

let allPostsCache: any[] | null = null
const postCache: Record<string, any> = {}

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

  // Use remark to convert markdown into HTML string
  // const processedContent = await unified()
  // .use(parse)
  // .use(remarkGfm)
  // .use(remark2rehype)
  // .use(addClasses, {
  //   'h1,h2,h3,p,a,ul,ol,pre,blockquote,table,code': 'default',
  //   a: 'text-primary text-lg',
  //   p: 'text-lg',
  //   pre: 'text-md font-mono',
  //   code: 'text-md font-mono text-wrap',
  //   li: 'text-lg',
  //   blockquote: 'text-md border-l-8 border-primary pl-8 pr-16 justify-start text-start',
  //   table: 'flex w-fit my-8 border-collapse border border-foreground/30',
  //   th: 'text-lg font-bold p-4 border border-foreground/30 bg-zinc-100 dark:bg-zinc-900',
  //   td: 'text-start justify-start text-md font-normal p-2 border border-foreground/30 bg-zinc-50 dark:bg-zinc-800'
  // })
  // .use(html)
  // .process(matterResult.content)
  
  const contentMd = matterResult.content.toString()

  // Combine the data with the id
  return {
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
}

// Cache the post before returning when in production
// (keeps the returned shape stable and avoids duplicate reads)
const originalGetPostData = getPostData
export async function _getPostDataWithCache(id: string) {
  const post = await originalGetPostData(id)
  if (process.env.NODE_ENV === 'production') postCache[id] = post
  return post
}

// For backwards compatibility, export getPostData as the cached wrapper
// in production; in development the original function is used directly.
if (process.env.NODE_ENV === 'production') {
  // @ts-ignore - reassign export
  exports.getPostData = _getPostDataWithCache
}