'use client'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Avatar,
  Link
} from "@nextui-org/react";
import Image from "next/image";
import projects from "../data/projectData";

export default function ProjectComponent() {
  return (
    <section className="flex flex-col gap-8 p-8 w-full justify-center items-center">
       <p className="text-4xl font-bold my-8">Projects</p>

      <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
        {projects.map((project, index) => (
          <Card
            key={`${project.name}+${index}`}
            shadow={"lg"}
            radius={"lg"}
            isHoverable
            isPressable
            className="p-unit-md max-w-unit-9xl border dark:border-zinc-700 bg-gradient-to-tr from-neutral-200 to-neutral-50 dark:bg-gradient-to-tr dark:from-black dark:to-zinc-900 min-w-unit-lg transition hover:-translate-x-1 hover:-translate-y-1"
            onPress={() => window.open(project.link, "_blank")}
          >
            <CardHeader className="flex flex-row gap-4">
                <Image 
                  src={project.image}
                  alt={project.name}
                  height={40}
                  width={40}
                  className="w-[40px] h-[40px] rounded-full"
                  placeholder={"empty"}
                  />
              <p className="text-2xl font-medium">{project.name}</p>
            </CardHeader>
            <CardBody>
              <p className="text-md text-foreground-500 font-normal">{project.description}</p>
            </CardBody>
            <CardFooter className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <Chip key={`${tech}+${index}`} variant={"faded"}>
                  {tech}
                </Chip>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
