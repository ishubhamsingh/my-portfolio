'use client'

import { Link, Button } from "@nextui-org/react";
import {SiGmail, SiGithub, SiLinkedin, SiX, SiTelegram} from "react-icons/si"
import AboutImage from "/public/images/about.svg";
import Image from "next/image";

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
    <section className="flex flex-col justify-center items-center gap-8 p-8 w-full">
      <div className="flex flex-col gap-4 justify-center">
        <p className="text-4xl font-bold my-8 text-center">About</p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <Image
            src={AboutImage}
            className={"size-4/6 md:size-2/6"}
            alt="about"
            placeholder={"empty"}
            />
        <div className="flex flex-col gap-4 justify-center">  
        <p className="text-2xl font-medium text-foreground text-start">
          I am a computer science engineering graduate, with around 8 years of
          working experience.
        </p>
        <p className="text-2xl font-medium text-foreground text-start">
          I completed my graduation in 2016 from Visvesvaraya Technological
          University.
        </p>
        <p className="text-2xl font-medium text-foreground text-start">
        Currently working as a Senior Software Engineer (Android)
          at{" "}
          {
            <Link
              className={"text-primary text-2xl font-medium"}
              href="https://www.jllt.com/"
            >
              JLLT
            </Link>
          }
          .
        </p>
        </div>
        </div>
        <div className="flex flex-col gap-8 mt-8 w-full items-center">
        <div className="flex flex-row gap-8 items-center">
            {
                contactLinks.map((contactLink, index) =>(
                    <Button 
                    isIconOnly 
                    key={`${contactLink}+${index}`} 
                    variant={"flat"} color={"default"} radius={"full"}
                    onClick={() => window.open(contactLink.link, "_blank")}
                    >
                        {contactLink.icon}
                    </Button>
                ))
            }
        </div>
        </div>
      </div>
    </section>
  );
}
