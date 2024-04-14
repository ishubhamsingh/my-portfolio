import { getPostData } from '@/lib/posts';
import { NextRequest, NextResponse } from 'next/server';
import { Post } from '@/app/types';


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id') || ""

    const postData: Post = await getPostData(id)

    return NextResponse.json(postData)
}