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
  }

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
      title: "About",
      href: "/about",
    },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth={"full"}>
      <NavbarContent justify={"start"}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-4">
          <Avatar isBordered src="/shubham-singh-dp-1.png" size="md" />  
          <p className="font-bold text-inherit uppercase">ishubhamsingh</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className={"hidden sm:flex gap-8"} justify={"center"}>
        {navItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} isActive={isActivePath(item.href)}>
            <Link color={isActivePath(item.href) ? "primary" : "foreground"}  href={item.href}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify={"end"}>
        <ThemeSwitch />
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} isActive={isActivePath(item.href)}>
            <Link
              href={item.href}
              color={isActivePath(item.href) ? "primary" : "foreground"} 
              className="w-full"
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
