import { Avatar } from "@nextui-org/react"
import Date from "./Date"

interface Props {
    authorName: string,
    authorAvatar: string,
    date: string
}

const PostAvatarDateComponent = (props: Props) => {
    return (
        <div className='flex flex-row items-center gap-x-4'>
        <Avatar
        size={'sm'} 
        src={props.authorAvatar}
        isBordered
        />
        <div className='flex flex-col'>
          <p className='text-foreground text-sm font-medium'>{props.authorName}</p>
          <div className='text-foreground/60 text-tiny font-normal'>
          <Date dateString={props.date} />
          </div>
        </div>
      </div>
    )
}

export default PostAvatarDateComponent