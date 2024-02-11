import { Divider } from "@nextui-org/react";
import HeroComponent from "./components/HeroComponent";
import ProjectComponent from "./components/ProjectComponent";
import AboutComponent from "./components/AboutComponent";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroComponent />
      <Divider />
      <ProjectComponent />
      <Divider />
      <AboutComponent />
    </main>
  );
}
