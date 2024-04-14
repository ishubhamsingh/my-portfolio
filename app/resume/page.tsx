"use client";

import { Button } from "@nextui-org/react";
import { FiDownload } from "react-icons/fi";
import NextImage from "next/image";
import resumePage1 from "@/public/images/shubham-singh-resume-page1.jpg";
import resumePage2 from "@/public/images/shubham-singh-resume-page2.jpg";

export default function AboutPage() {
  return (
    <section className="flex min-h-screen flex-col gap-8 p-8 w-full items-center">
      <div className="flex flex-row w-4/6 max-sm:w-full m-8 justify-between">
        <p className="text-4xl font-bold">Resume</p>
        <Button
          variant={"shadow"}
          radius={"full"}
          color={"primary"}
          onClick={() => window.open("/pdf/shubham-singh-resume.pdf", "_blank")}
          startContent={<FiDownload />}
        >
          {" "}
          Download{" "}
        </Button>
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-8 mx-8">
        <NextImage
          src={resumePage1}
          alt="resume page 1"
          placeholder={"blur"}
          className={"w-4/6 h-auto m-auto max-sm:w-full rounded-3xl"}
        />
        <NextImage
          src={resumePage2}
          alt="resume page 1"
          placeholder={"blur"}
          className={"w-4/6 h-auto m-auto max-sm:w-full rounded-3xl"}
        />
      </div>
    </section>
  );
}
