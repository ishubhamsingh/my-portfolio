"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";
import { Avatar } from "@nextui-org/react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    return href === pathname;
  };

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ];
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      maxWidth={"full"}
    >
      <NavbarContent className={"gap-4 max-w-fit"} justify={"start"}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-4 max-w-fit">
          <Avatar isBordered src="/images/shubham-singh-dp-1.png" size="md" />
          <p className="font-bold text-inherit uppercase">ishubhamsingh</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className={"gap-8"} justify={"end"}>
        {navItems.map((item, index) => (
          <NavbarItem
            className={"hidden sm:block"}
            key={`${item}-${index}`}
            isActive={isActivePath(item.href)}
          >
            <Link
              color={isActivePath(item.href) ? "primary" : "foreground"}
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={isActivePath(item.href)}
          >
            <Link
              href={item.href}
              color={isActivePath(item.href) ? "primary" : "foreground"}
              className="w-full"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
