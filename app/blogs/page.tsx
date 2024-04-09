'use client'

import BlogPostCardComponent from '../components/BlogPostCardComponent';
import { useEffect, useState } from 'react';
import {Input, CircularProgress} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi"

type Posts = PostData[]

type PostData = {
    id: string;
    title: string;
    description: string;
    headerImage?: string;
    categories: string[];
    date: string;
    authorName: string;
    authorAvatar: string;
    published: boolean;
  };


async function fetchData(query: string) {
    let response = await fetch(`/blogs/api/posts?query=${query}`)
    const allPostsData: Posts = await response.json()
    return allPostsData
}  

export default function BlogPage() {
    const [data, setData] = useState([] as Posts)
    const [searchQuery, setSearchQuery] = useState("" as string)
    const [isLoading, setLoading] = useState(false as boolean)
    
    useEffect(() => {
        setLoading(true)
        fetchData(searchQuery).then((data: Posts) => {  
            setData(data) 
        }).catch((e) => {
            console.error(e)
        }).then(() => {
            setLoading(false)
        })
    }, [searchQuery]);

    return (
       <section className="flex p-8 mx-auto flex-col min-h-screen items-center">
        <div className='w-full md:w-5/6 lg:w-4/6 xl:3/6'>
        <div className='flex flex-col gap-8 mb-24 items-center justify-start md:flex-row md:justify-between sm:flex-row sm:justify-between'>
        <p className="text-4xl font-bold text-start">Blogs</p>
         <Input 
         type={"text"}
         placeholder="Search"
         variant={"faded"}  
         radius={"full"}
         value={searchQuery}
         onValueChange={setSearchQuery}
         startContent={<FiSearch />}
         isClearable
         className='max-w-unit-6xl'/> 
        </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8'>
          {searchQuery !== "" && data.length === 0 && 
            <div className="flex w-full col-span-1 lg:col-span-2 md:col-span-2 xl:col-span-3 items-center justify-center">
                <p className='text-xl font-medium'>No results found</p>
            </div>
            }
            {isLoading && 
             <div className="flex w-full col-span-1 lg:col-span-2 md:col-span-2 xl:col-span-3 items-center justify-center">
             <CircularProgress size="md" aria-label="Loading..."/>
             </div>
            }
           {data.map((post: PostData) => (
            <BlogPostCardComponent 
              key = {post.id}
              id = {post.id}
              title = {post.title}
              description = {post.description}
              headerImageUrl = {post.headerImage}
              date = {post.date}
              authorName={post.authorName}
              authorAvatar={post.authorAvatar}
              />
          ))}
        </div> 
        </div>
        </section>
    )
}