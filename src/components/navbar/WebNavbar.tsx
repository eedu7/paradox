import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navbarItems } from "@/constants/navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
    pathname: string;
}

export const WebNavbar = ({ pathname }: Props) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navbarItems.map(({ title, href }) => (
                    <NavbarListItem
                        key={href}
                        title={title}
                        href={href}
                        isActive={href === pathname}
                    />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

interface NavbarListItemProps {
    title: string;
    href: string;
    isActive: boolean;
}

const NavbarListItem = ({ title, href, isActive }: NavbarListItemProps) => {
    return (
        <NavigationMenuItem>
            <Link
                href={href}
                className={cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground")}
            >
                {title}
            </Link>
        </NavigationMenuItem>
    );
};
