import Image from "next/image";
import { SiAndroidstudio, SiKotlin, SiReact, SiGit } from "react-icons/si";

const skills = [
  {
    name: "Android",
    icon: <SiAndroidstudio className="w-8 h-8 text-[#3ddc84]" />,
  },
  {
    name: "Kotlin",
    icon: <SiKotlin className="w-8 h-8 text-[#c711e1]" />,
  },
  {
    name: "ReactJs",
    icon: <SiReact className="w-8 h-8 text-[#1eaaf1]" />,
  },
  {
    name: "Git",
    icon: <SiGit className="w-8 h-8 text-slate-500" />,
  },
];

export default function HeroComponent() {
  return (
    <section className="flex flex-row justify-between items-center gap-16 py-24 px-8 max-sm:py-8 w-full max-sm:flex-col">
      <div className="hidden flex-row m-auto items-center max-sm:flex">
        <Image
          src={"/shubham-singh-dp-1.png"}
          alt="Shubham Singh"
          width={200}
          height={200}
          className="rounded-full border-spacing-16 border-4 border-foreground-400"
        />
      </div>
      <div className="flex flex-col gap-4 m-auto items-start">
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
              <p className="text-xl font-normal text-foreground">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-w-fit flex-row m-auto items-center max-sm:hidden">
        <Image
          src={"/shubham-singh-dp-1.png"}
          alt="Shubham Singh"
          width={200}
          height={200}
          className="rounded-full border-spacing-16 border-4 border-foreground-400"
        />
      </div>
    </section>
  );
}