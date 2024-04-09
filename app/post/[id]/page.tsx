import { Image, Chip, Code, Divider } from '@nextui-org/react'
import "./blog.css"
import ReactMarkdown from 'react-markdown'
import addClasses from 'rehype-class-names';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiHash } from 'react-icons/fi'
import PostAvatarDateComponent from '@/app/components/PostAvatarDateComponent'
import { BASE_URL } from '@/app/constants';

type Params = {
    id: string
}

type Props = {
    params: Params
}

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

  async function fetchPostData(id: string) {
    let response = await fetch(`${BASE_URL}/post/api/getPostById?id=${id}`)
    const postData: PostData = await response.json()
    return postData
} 

  export async function generateMetadata({ params }: Props) {
    const postData = await fetchPostData(params.id)
    return {
      metadataBase: new URL(BASE_URL),
      title: postData.title,
      description: postData.description,
      images: postData.headerImage,
      creator: postData.authorName,
      authors: postData.authorName,
      keywords: postData.categories,
      openGraph: {
        type: 'article',
        images: [{url: postData.headerImage}]
      },
      twitter: {
        images: postData.headerImage
      }
    }
  }

  const addClassesOptions = {
    'h1,h2,h3,p,a,ul,ol,pre,blockquote,table,code': 'default',
    a: 'text-primary text-lg',
    p: 'text-lg',
    pre: 'text-md font-mono',
    code: 'text-md font-mono text-wrap',
    li: 'text-lg',
    blockquote: 'text-md border-l-8 border-primary pl-8 pr-16 justify-start text-start',
    table: 'flex w-fit my-8 border-collapse border border-foreground/30',
    th: 'text-wrap text-lg font-bold p-4 border border-foreground/30 bg-zinc-100 dark:bg-zinc-900',
    td: 'text-wrap text-start justify-start text-md font-normal p-2 border border-foreground/30 bg-zinc-50 dark:bg-zinc-800'
  }

export default async function Post({params}: Props) {
  const postData = await fetchPostData(params.id)
    return (
      <section className="flex flex-col min-h-screen w-full p-8 items-center">
        <div className='flex flex-col w-full md:w-5/6 lg:w-3/6 '>
        <h1 className={'text-foreground/90 font-extrabold text-3xl mb-1'}>{postData.title}</h1>
        <h3 className='text-foreground/80 font-medium text-xl mb-4'>{postData.description}</h3>  
        <PostAvatarDateComponent 
        authorAvatar={postData.authorAvatar}
        authorName={postData.authorName}
        date={postData.date}
        />
        <div className={'flex flex-wrap gap-2 w-full mt-4 mb-4'}>
          {postData.categories.map((category, index) => (
            <Chip
            key={index} 
            variant={"flat"} 
            size={'sm'}
            color={'secondary'}
            startContent={<FiHash />}
            >
              {category}
              </Chip>
          ))}
          </div>
        <Divider className='mb-4' />
        <Image
          removeWrapper 
          src={postData.headerImage}
          alt={postData.id}
          radius={'lg'}
          shadow={'lg'}
          className={'w-full h-64 md:h-80 lg:h-96 object-cover'}
          loading={'lazy'}
          />

          <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[[addClasses, addClassesOptions]]}
          className={'flex p-8 mx-auto flex-col w-full'}
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  showLineNumbers
                  wrapLines
                  wrapLongLines
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <Code color={'danger'}>{children}</Code>
              );
            }
          }}
          >
            {postData.contentMd}
          </ReactMarkdown>
        </div>
        </section>
      )
}