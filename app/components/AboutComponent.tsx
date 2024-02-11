'use client'

import { Link, Button } from "@nextui-org/react";
import {SiGmail, SiGithub, SiLinkedin, SiX, SiTelegram} from "react-icons/si"

const contactLinks = [
    {
        name: "Mail",
        icon: <SiGmail />,
        link: "mailto:coolsks94@gmail.com"
    },
    {
        name: "LinkedIn",
        icon: <SiLinkedin />,
        link: "https://www.linkedin.com/in/imshubhamsingh/"
    },
    {
        name: "Github",
        icon: <SiGithub />,
        link: "https://github.com/ishubhamsingh"
    },
    {
        name: "Telegram",
        icon: <SiTelegram />,
        link: "https://t.me/ishubhamsingh"
    },
    {
        name: "X",
        icon: <SiX />,
        link: "https://x.com/ishubhamsingh"
    },
]

export default function AboutComponent() {
  return (
    <section className="flex flex-col justify-between items-center gap-8 p-8 w-full">
      <div className="flex flex-col m-auto gap-8">
        <p className="text-4xl font-bold my-8">About</p>
        <p className="text-2xl font-medium text-foreground text-start">
          I am a computer science engineering graduate, with around 8 years of
          working experience.
        </p>
        <p className="text-2xl font-normal text-foreground text-start">
          I completed my graduation in 2016 from Visvesvaraya Technological
          University. Currently working as a Senior Software Engineer (Android)
          at{" "}
          {
            <Link
              className={"text-primary text-2xl font-normal"}
              href="https://www.spireon.com/"
            >
              Spireon
            </Link>
          }
          .
        </p>
        <p className="text-2xl mt-8 font-medium text-foreground">
            Get in touch with me:
        </p>
        <div className="flex flex-row gap-8 items-start">
            {
                contactLinks.map((contactLink, index) =>(
                    <Button 
                    isIconOnly 
                    key={`${contactLink}+${index}`} 
                    variant={"ghost"} color={"primary"} radius={"full"}
                    onClick={() => window.open(contactLink.link, "_blank")}
                    >
                        {contactLink.icon}
                    </Button>
                ))
            }
        </div>
      </div>
    </section>
  );
}
