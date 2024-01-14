//Desc: Footer component for the app
import { Link } from "@nextui-org/react";

export default function FooterComponent() {
  return (
    <div className="absolute bottom-0 flex justify-center p-2 items-center w-full h-auto border-t border-divider">
      <p className="text-center text-sm font-regular text-inherit">
        Designed with ❤️ by{" "}
        <Link underline="hover" href="/">
          Shubham Singh
        </Link>{" "}
        © {new Date().getFullYear()}
      </p>
    </div>
  );
}
