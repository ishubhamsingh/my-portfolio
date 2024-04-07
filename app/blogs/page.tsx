'use client'

import BlogPostCardComponent from '../components/BlogPostCardComponent';
import { useEffect, useState } from 'react';
import {Input} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi"

type Posts = {
    id: string,
    title: string,
    description: string,
    headerImage?: string,
    categories: string[], 
    date: string,
    published: boolean
}[]

type PostData = {
    id: string;
    title: string;
    description: string;
    headerImage?: string;
    categories: string[];
    date: string;
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
    
    useEffect(() => {
        fetchData(searchQuery).then((data: Posts) => {  setData(data) }).catch((e) => {console.error(e)})
    }, [searchQuery]);

    return (
       <section className="flex p-8 items-center flex-col min-h-screen">
        <div className='w-full flex flex-col gap-8 mb-24 items-center justify-start md:flex-row md:justify-between sm:flex-row sm:justify-between'>
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
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {searchQuery !== "" && data.length === 0 && 
            <div className="flex w-full col-span-1 md:col-span-3 sm:col-span-2 items-start justify-start sm:items-center sm:justify-center md:items-center md:justify-center">
                <p className='text-xl font-medium'>No results found</p>
            </div>}
           {data.map((post: PostData) => (
            <BlogPostCardComponent 
              key = {post.id}
              id = {post.id}
              title = {post.title}
              description = {post.description}
              headerImageUrl = {post.headerImage}
              date = {post.date}
              />
          ))}
        </div> 
        </section>
    )
}