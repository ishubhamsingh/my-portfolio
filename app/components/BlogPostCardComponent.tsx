'use client'

import {
  Card,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Date  from "./Date"

type PostData = {
  id: string;
  title: string;
  description: string;
  headerImage?: string;
  categories: string[];
  date: string;
  published: boolean;
};

export default function BlogPostCardComponent(postData: PostData) {
    const router = useRouter()
  return (
    <Card
      key={postData.id}
      isFooterBlurred
      shadow={"lg"}
      radius={"lg"}
      isHoverable
      isPressable
      className="border-none max-w-unit-8xl max-h-unit-5xl"
      onPress={() => router.push(`/post/${postData.id}`)}
      >
      <Image
        removeWrapper
        alt={postData.id}
        src={postData.headerImage}
        className="z-0 w-full h-full object-cover"
        loading={"eager"}
      />

      <CardFooter className="absolute flex-col items-start bg-black/40 bottom-0 z-10 border-none">
        <p className="text-tiny font-medium text-primary mb-1">
          <Date dateString={postData.date} />
        </p>
        <h4 className="text-white/90 font-medium text-lg truncate">{postData.title}</h4>
        <p className="text-sm font-normal text-white/60 truncate">
          {postData.description}
        </p>
      </CardFooter>
    </Card>
  );
}
