'use client';

import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuToggle, NavbarMenuItem} from '@nextui-org/react';
import ThemeSwitch from './ThemeSwitch';

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navItems = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Blogs',
            href: '/blogs',
        },
        {
            title: 'About',
            href: '/about',
        },
    ];
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth={'full'}>
            <NavbarContent justify={'start'}>
                <NavbarMenuToggle
                   aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                   className='sm:hidden'
                />
                <NavbarBrand>
                    <p className='font-bold text-inherit uppercase'>ishubhamsingh</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className={'hidden sm:flex gap-8'} justify={'center'}>
                {navItems.map((item, index) => (
                  <NavbarItem key={`${item}-${index}`}>
                  <Link color='foreground' href={item.href}>{item.title}</Link>  
                  </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify={'end'}>
                <ThemeSwitch />
            </NavbarContent>
            <NavbarMenu>
            {navItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                  <Link href={item.href} 
                  color='foreground'
                  className='w-full'
                  size='lg'
                  >
                    {item.title}
                    </Link>  
                  </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>    
    )
}