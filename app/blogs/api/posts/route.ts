import { getSortedPostsData, getPostsByTag } from '@/lib/posts';
import { NextRequest, NextResponse } from 'next/server';
import { Posts } from '@/app/types';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query') || ""

    let postData: Posts
    if(query === "") {
        postData = await getSortedPostsData()
    } else {
        postData = await getPostsByTag(query)
    }

    return NextResponse.json(postData)
}