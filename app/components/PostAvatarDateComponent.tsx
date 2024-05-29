import Date from "./Date"
import { AvatarComponent } from "./HeroComponent"

interface Props {
    authorName: string,
    authorAvatar: string,
    date: string
}

const PostAvatarDateComponent = (props: Props) => {
    return (
        <div className='flex flex-row items-center gap-x-4'>
        <AvatarComponent width={32} height={32} src={props.authorAvatar} placeholder="empty"/>
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