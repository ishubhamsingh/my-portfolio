import Image from "next/image";
import {SiAndroidstudio, SiKotlin, SiReact, SiGit} from "react-icons/si";

const skills = [
  {
    name: "Android",
    icon: <SiAndroidstudio className="w-6 h-6 text-green-600" />,
  },
  {
    name: "Kotlin",
    icon: <SiKotlin className="w-6 h-6 text-fuchsia-600" />,
  },
  {
    name: "ReactJs",
    icon: <SiReact className="w-6 h-6 text-sky-400"/>,
  },
  {
    name: "Git",
    icon: <SiGit className="w-6 h-6 text-slate-500" />,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <section className="flex flex-row justify-between items-center gap-16 p-8 w-full max-sm:flex-col">
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
          <p className="font-regular text-5xl uppercase text-foreground-500">
            Hello,
          </p>
          <div className="flex flex-row items-start gap-2 max-sm:flex-col">
            <p className="text-5xl font-regular text-foreground-500">
              I&apos;M
            </p>
            <p className="text-5xl font-bold uppercase text-foreground whitespace-nowrap max-sm:whitespace-normal">
              Shubham Singh
            </p>
          </div>
          <p className="text-lg m-auto font-medium text-foreground-500">
            I&apos;m a Software Engineer who loves making modern Android & Web apps.
          </p>
          <div className="flex flex-row gap-8 max-sm:flex-col items-start">
            {skills.map((skill, index) => (
              <div className="flex flex-row gap-2 item-center justify-center" key={`${skill}+${index}`}>
                {skill.icon}
                <p className="text-md font-medium text-foreground">{skill.name}</p>
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
    </main>
  );
}
