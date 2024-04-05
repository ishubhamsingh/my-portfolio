import { getSortedPostsData, getPostsByTag } from '../../../lib/posts';
import { NextResponse } from 'next/server';

type Posts = {
    id: string,
    title: string,
    description: string,
    headerImage?: string,
    categories: string[], 
    date: string,
    published: boolean
}[]

export async function getAllPosts() {
    const allPostsData: Posts = await getSortedPostsData()

    return NextResponse.json(allPostsData)
}

export async function getAllPostsByTag(query: string) {
    const filteredPosts: Posts = await getPostsByTag(query)

    return NextResponse.json(filteredPosts)
}