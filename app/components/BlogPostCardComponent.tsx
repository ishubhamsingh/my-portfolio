'use client'

import {
  Card,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Date  from "./Date"

interface Props {
  key: string,
  id: string,
  title: string,
  description: string,
  headerImageUrl?: string,
  date: string
}

const BlogPostCardComponent = (props: Props) => {
  const router = useRouter()
  return (
    <Card
      key={props.id}
      isFooterBlurred
      shadow={"lg"}
      radius={"lg"}
      isHoverable
      isPressable
      className="border-none max-w-unit-8xl max-h-unit-5xl"
      onPress={() => router.push(`/post/${props.id}`)}
      >
      <Image
        removeWrapper
        alt={props.id}
        src={props.headerImageUrl}
        className="z-0 w-full h-full object-cover"
        loading={"eager"}
      />

      <CardFooter className="absolute flex-col items-start bg-black/40 bottom-0 z-10 border-none">
        <p className="text-tiny font-medium text-primary mb-1">
          <Date dateString={props.date} />
        </p>
        <h4 className="text-white/90 font-medium text-lg truncate">{props.title}</h4>
        <p className="text-sm font-normal text-white/60 truncate">
          {props.description}
        </p>
      </CardFooter>
    </Card>
  );
}

export default BlogPostCardComponent
