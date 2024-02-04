import { Divider } from "@nextui-org/react";
import HeroComponent from "./components/HeroComponent";
import ProjectComponent from "./components/ProjectComponent";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <HeroComponent />
      <Divider />
      <ProjectComponent />
    </main>
  );
}
