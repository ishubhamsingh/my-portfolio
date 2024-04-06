'use server'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified'  
import parse from 'remark-parse';  
import remark2rehype from "remark-rehype";   
import html from 'rehype-stringify';
import addClasses from 'rehype-class-names';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
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

  return sortedPosts.filter((post) => post.published === true)
}

export async function getPostsByTag(query: string) {
   const allPosts = await getSortedPostsData()

   return allPosts.filter((post) => post.categories.includes(query.toLowerCase()) || post.title.toLowerCase().includes(query.toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase()))
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
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = unified()
  .use(parse)
  .use(remark2rehype)
  .use(addClasses, {
    'h1,h2,h3,p,a,ul,ol': 'default',
    a: 'text-primary',
  })
  .use(html)
  .processSync(matterResult.content)
  
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      title: string,
      description: string,
      headerImage?: string,
      categories: string[], 
      date: string,
      published: boolean
    }),
  }
}