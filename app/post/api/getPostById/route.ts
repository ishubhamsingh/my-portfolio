import { getPostData } from '@/lib/posts';
import { NextRequest, NextResponse } from 'next/server';

type PostData = {
    id: string;
    contentMd: string,
    title: string;
    description: string;
    headerImage?: string;
    categories: string[];
    date: string;
    authorName: string;
    authorAvatar: string;
    published: boolean;
  };

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id') || ""

    const postData: PostData = await getPostData(id)

    return NextResponse.json(postData)
}