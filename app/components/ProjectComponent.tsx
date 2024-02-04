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

const projects = [
  {
    name: "Splashy",
    description: "An Unsplash based wallpaper app built with Compose Multiplatform and KMM for Android and iOS.",
    techStack: ["Kotlin", "Kmm", "Ktor", "Compose", "Voyager", "Koin", "SQLDelight"],
    link: "https://github.com/ishubhamsingh/Splashy",
    image: "https://raw.githubusercontent.com/ishubhamsingh/Splashy/main/assets/icon.png"
  },
  {
    name: "Walldeck",
    description: "A beautiful wallpaper app, designed in material design, contains beautiful, original wallpapers.",
    techStack: ["Kotlin", "Compose"],
    link: "https://play.google.com/store/apps/details?id=dev.ishubhamsingh.walldeck",
    image: "/walldeck.webp"
  },
  {
    name: "AospExtended",
    description: "An android custom ROM based on AOSP, which provides a stock experience along with customization features.",
    techStack: ["Aosp", "Java", "Xml", "C++", "Make"],
    link: "https://github.com/AospExtended",
    image: "https://github.com/AospExtended.png"
  },

];

export default function ProjectComponent() {
  return (
    <section className="flex flex-col gap-8 p-8 w-full justify-center items-center">
       <p className="text-4xl font-medium">Projects</p>

      <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
        {projects.map((project, index) => (
          <Card
            key={`${project.name}+${index}`}
            shadow={"lg"}
            radius={"lg"}
            isHoverable
            isPressable
            className="p-unit-md max-w-unit-9xl min-w-unit-lg border-none transition hover:-translate-x-1 hover:-translate-y-1"
            onPress={() => window.open(project.link, "_blank")}
          >
            <CardHeader className="flex flex-row gap-4">
                <Avatar src={project.image} size="md"/>
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
