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

const projects = [
  {
    name: "Splashy",
    description: "An Unsplash based wallpaper app built with Compose Multiplatform and KMM for Android and iOS.",
    techStack: ["Kotlin", "KMP", "Ktor", "Compose", "Voyager", "Koin", "SQLDelight"],
    link: "https://github.com/ishubhamsingh/Splashy",
    image: "https://raw.githubusercontent.com/ishubhamsingh/Splashy/main/assets/icon.png"
  },
  {
    name: "AospExtended",
    description: "An android custom ROM based on AOSP, which provides a stock experience along with customization features.",
    techStack: ["Aosp", "Java", "Xml", "C++", "Make"],
    link: "https://github.com/AospExtended",
    image: "https://github.com/AospExtended.png"
  },
  {
    name: "Omnitracs Mobile Manager",
    description: "Omnitracs Mobile Manager is a mobile application that seamlessly integrates with your back-office Omnitracs web application and gives you the key information you need to manage your mobile resources while you’re on the go. You’ll have visibility into the day’s routes, orders, equipment and worker performance at your fingertips.",
    techStack: ["Kotlin", "KMP", "Compose", "Ktor", "Hilt", "SQLDelight"],
    link: "https://play.google.com/store/apps/details?id=com.roadnet.mobile.fleetview.android",
    image: "/images/omm.webp"
  },
  {
    name: "LoJack",
    description: "LoJack helps keep you and your loved ones safe behind the wheel. Get speed, low battery, and GeoFence entry / exit alerts, all from the convenience of your phone. Find and recover your car using real-time GPS tracking.",
    techStack: ["Kotlin", "Hilt", "Room", "Maps SDK", "Retrofit", "Gson"],
    link: "https://play.google.com/store/apps/details?id=com.spireon.kahu&hl=en&gl=US",
    image: "/images/lojack.webp"
  },
  {
    name: "GoldStar",
    description: "GoldStar goes beyond your typical GPS tracking system by offering a powerful collateral management solution featuring an intuitive, user-friendly interface that puts all your tracking data at just a click away.",
    techStack: ["Kotlin", "Hilt", "Room", "Maps SDK", "Retrofit", "Gson"],
    link: "https://play.google.com/store/apps/details?id=com.spireon.android.gsdealer",
    image: "/images/goldstar.webp"
  },
  {
    name: "Periscope",
    description: "For fleet managers who need fleet visibility on-the-go, use FleetLocate Periscope, the mobile companion to FleetLocate by Spireon. Be the first to know where your drivers and vehicles are at all times. Understand when your drivers are speeding or moving assets without authorization.",
    techStack: ["Kotlin", "Hilt", "Room", "Maps SDK", "Retrofit", "Gson"],
    link: "https://play.google.com/store/apps/details?id=com.spireon.fleet",
    image: "/images/periscope.webp"
  }
];

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
