//Desc: Footer component for the app
import { Link } from "@nextui-org/react";

export default function FooterComponent() {
  return (
    <footer className="relative bottom-0 left-0 z-40 flex justify-center p-2 items-center w-full h-auto border-t border-divider">
      <p className="text-center text-sm font-regular text-foreground-500">
        Designed with ❤️ by{" "}
        <Link className={"text-primary-500"} underline="hover" href="/">
          Shubham Singh
        </Link>{" "}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
