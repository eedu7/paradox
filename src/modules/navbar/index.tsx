"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/modules/navbar/constants";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navbarItems.map(({ title, href }) => (
                    <NavbarItem
                        key={`${title}_${href}`}
                        title={title}
                        href={href}
                        isActive={href === pathname}
                    />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

interface NavbarItemProps {
    title: string;
    href: string;
    isActive?: boolean;
}

const NavbarItem = ({ title, href, isActive }: NavbarItemProps) => {
    return (
        <NavigationMenuItem>
            <Link
                href={href}
                passHref
            >
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isActive && "bg-accent")}>
                    {title}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
};
