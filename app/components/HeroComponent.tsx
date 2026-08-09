import { SiJetpackcompose  } from "react-icons/si";
import { TbBrandAndroid, TbBrandKotlin, TbBrandReact, TbBrandGithub  } from "react-icons/tb"
import Image, { StaticImageData } from "next/image"
import avatarImage from "@/public/images/shubham-singh-dp-1.png"
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

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
    // Side-by-side only once there is genuinely room for it. The text column is
    // ~710px wide at its natural size and the avatar block another ~264px, so
    // below xl the two are stacked. Laying them out in a row any earlier
    // overflowed a `justify-center` container, which pushes content off the
    // left edge where it cannot be scrolled back into view.
    <section className="flex flex-col xl:flex-row justify-center items-center gap-12 xl:gap-16 py-16 xl:py-24 max-sm:py-8 px-8 w-full">
      <div className="flex shrink-0 xl:order-2 xl:px-8">
        <AvatarComponent height={200} width={200} src={avatarImage} placeholder="blur"/>
      </div>
      <div className="flex flex-col gap-4 items-start xl:order-1">
        <p className="font-regular text-6xl uppercase text-foreground-500">
          Hello,
        </p>
        <h1 className="flex flex-row items-start gap-2 max-sm:flex-col">
          <span className="text-6xl font-regular text-foreground-500">I&apos;M</span>
          <span className="text-6xl font-bold uppercase text-foreground whitespace-nowrap max-sm:whitespace-normal">
            Shubham Singh
          </span>
        </h1>
        <p className="text-2xl m-auto pt-8 font-normal text-foreground-500">
          I&apos;m a Software Engineer who loves making modern Android & Web
          apps.
        </p>
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 pt-4 max-sm:flex-col items-start">
          {skills.map((skill, index) => (
            <div
              className="flex flex-row gap-2 item-center justify-center"
              key={skill.name}
            >
              {skill.icon}
              <p className="text-2xl font-normal text-foreground-600">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AvatarComponent(props: {width: number, height: number, src: StaticImageData | string, placeholder: PlaceholderValue}) {
  return (
    <div className="flex shrink-0 grow-0 rounded-full ring-2 ring-offset-2 ring-default-300 ring-offset-background" style={{ width: props.width, height: props.height }}>
      <Image
      className="rounded-full object-cover aspect-square object-center"
      style={{ width: props.width, height: props.height }}
      src={props.src}
      alt="Shubham Singh's profile photo"
      width={props.width}
      height={props.height}
      placeholder={props.placeholder} />
    </div>
  )
}