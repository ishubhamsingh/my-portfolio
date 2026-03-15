'use client'

import BlogPostCardComponent from '../components/BlogPostCardComponent';
import { useEffect, useState, useRef, useCallback } from 'react';
import {Input, CircularProgress} from "@heroui/react";
import { FiSearch } from "react-icons/fi"
import { Post, Posts } from "@/app/types"


async function fetchData(query: string) {
    let response = await fetch(`/blogs/api/posts?query=${query}`)
    const allPostsData: Posts = await response.json()
    return allPostsData
}

export default function BlogPage() {
    const [data, setData] = useState<Posts>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [debouncedQuery, setDebouncedQuery] = useState("")
    const [isLoading, setLoading] = useState(false)
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleSearchChange = useCallback((value: string) => {
        setSearchQuery(value)
        if (debounceTimer.current) clearTimeout(debounceTimer.current)
        debounceTimer.current = setTimeout(() => {
            setDebouncedQuery(value)
        }, 350)
    }, [])

    useEffect(() => {
        return () => {
            if (debounceTimer.current) clearTimeout(debounceTimer.current)
        }
    }, [])

    useEffect(() => {
        setLoading(true)
        fetchData(debouncedQuery).then((data: Posts) => {
            setData(data)
        }).catch((e) => {
            console.error(e)
        }).then(() => {
            setLoading(false)
        })
    }, [debouncedQuery]);

    return (
       <section className="flex p-8 mx-auto flex-col min-h-screen items-center">
        <div className='w-full md:w-5/6 lg:w-4/6'>
        <div className='flex flex-col gap-8 mb-24 items-center justify-start md:flex-row md:justify-between sm:flex-row sm:justify-between'>
        <p className="text-4xl font-bold text-start">Blogs</p>
         <Input
         type={"text"}
         placeholder="Search"
         aria-label="Search blog posts"
         variant={"faded"}
         radius={"full"}
         value={searchQuery}
         onValueChange={handleSearchChange}
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
           {data.map((post: Post) => (
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