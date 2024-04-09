'use client'

import {
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import PostAvatarDateComponent from "./PostAvatarDateComponent";

interface Props {
  key: string,
  id: string,
  title: string,
  description: string,
  headerImageUrl?: string,
  date: string,
  authorName: string,
  authorAvatar: string
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
      className="h-fit w-full transition-all duration-300 ease-in-out hover:scale-105"
      onPress={() => router.push(`/post/${props.id}`)}
      >
        <CardBody className=" flex flex-col gap-4 overflow-visible p-0">
        <Image
        removeWrapper
        alt={props.id}
        src={props.headerImageUrl}
        className="w-full h-40 object-cover"
        loading={"lazy"}
        radius="none"
        shadow="md"
      />
      <div className="mx-4 mb-4">
      <PostAvatarDateComponent 
        authorAvatar={props.authorAvatar}
        authorName={props.authorName}
        date={props.date}
        />
        <h4 className="text-foreground/90 font-bold text-lg truncate mt-2">{props.title}</h4>
        <p className="text-md font-medium text-foreground/60 truncate">
          {props.description}
        </p>
      </div>
        </CardBody>
    </Card>
  );
}

export default BlogPostCardComponent
