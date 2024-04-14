import { Avatar } from "@nextui-org/react";
import { SiJetpackcompose  } from "react-icons/si";
import { TbBrandAndroid, TbBrandKotlin, TbBrandReact, TbBrandGithub  } from "react-icons/tb"
import Image from "next/image"
import avatarImage from "@/public/images/shubham-singh-dp-1.png"

const skills = [
  {
    name: "Android",
    icon: <TbBrandAndroid className="w-8 h-8 text-[#3DDC84]" />,
  },
  {
    name: "Kotlin",
    icon: <TbBrandKotlin className="w-8 h-8 text-[#c711e1]" />,
  },
  {
    name: "Compose",
    icon: <SiJetpackcompose className="w-8 h-8 text-[#4285F4]" />,
  },
  {
    name: "ReactJs",
    icon: <TbBrandReact className="w-8 h-8 text-[#1eaaf1]" />,
  },
  {
    name: "Git",
    icon: <TbBrandGithub className="w-8 h-8 text-black dark:text-white" />,
  },
];

export default function HeroComponent() {
  return (
    <section className="flex flex-row justify-center items-center gap-16 py-24 px-8 max-sm:py-8 w-full max-sm:flex-col">
      <div className="hidden flex-row m-auto items-center max-sm:flex">
      <AvatarComponent height={200} width={200} />
      </div>
      <div className="flex flex-col gap-4 items-start">
        <p className="font-regular text-6xl uppercase text-foreground-500">
          Hello,
        </p>
        <div className="flex flex-row items-start gap-2 max-sm:flex-col">
          <p className="text-6xl font-regular text-foreground-500">I&apos;M</p>
          <p className="text-6xl font-bold uppercase text-foreground whitespace-nowrap max-sm:whitespace-normal">
            Shubham Singh
          </p>
        </div>
        <p className="text-2xl m-auto pt-8 font-normal text-foreground-500">
          I&apos;m a Software Engineer who loves making modern Android & Web
          apps.
        </p>
        <div className="flex flex-row gap-8 pt-4 max-sm:flex-col items-start">
          {skills.map((skill, index) => (
            <div
              className="flex flex-row gap-2 item-center justify-center"
              key={`${skill}+${index}`}
            >
              {skill.icon}
              <p className="text-2xl font-normal text-foreground-600">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-8 flex max-w-fit flex-row items-center max-sm:hidden">
        <AvatarComponent height={200} width={200} />
      </div>
    </section>
  );
}

export function AvatarComponent(props: {width: number, height: number}) {
  return (
    <div className={`flex flex-shrink-0 flex-grow-0 w-[${props.width}px] h-[${props.height}px] rounded-full ring-2 ring-offset-2 ring-default-300 ring-offset-background`}>
      <Image 
      className={`w-[${props.width}px] h-[${props.height}px] rounded-full`} 
      src={avatarImage} 
      alt="avatar" 
      width={props.width}
      height={props.height}
      placeholder={"blur"} />
    </div>
  )
}