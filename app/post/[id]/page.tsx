import { getPostData } from '@/lib/posts'
import Date from '@/app/components/Date'
import "./blog.css"

type Params = {
    id: string
}

type Props = {
    params: Params
}

type PostData = {
    id: string;
    contentHtml: string,
    title: string;
    description: string;
    headerImage?: string;
    categories: string[];
    date: string;
    published: boolean;
  };

  export async function generateMetadata({ params }: Props) {
    const postData: PostData = await getPostData(params.id)
  
    return {
      title: postData.title,
    }
  }

export default async function Post({params}: Props) {
    const postData: PostData = await getPostData(params.id)
    return (
      <section className="flex min-h-screen p-8 w-full items-start flex-col justify-start">
          {/* Post Title */}
          <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>
    
          <div className='text-foreground-500 font-medium mb-5'>
            <Date dateString={postData.date} />
          </div>
    
          {/* Post Content */}
          <div
            className={'flex flex-col text-foreground p-8 w-full items-start justify-start'}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </section>
      )
}