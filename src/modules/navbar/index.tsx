"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navbarItems, subNavItems } from "@/modules/navbar/constants";
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
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            ["/media", "/community", "/activities", "/education"].some((path) =>
                                pathname.startsWith(path),
                            ) && "bg-accent",
                        )}
                    >
                        More
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[700px] grid-cols-4">
                            {subNavItems.map((value, index) => (
                                <div
                                    className="flex w-44 flex-col gap-2"
                                    key={index}
                                >
                                    {value.map((data) => (
                                        <ListItem
                                            href={data.href}
                                            key={data.title}
                                            title={data.title}
                                            isActive={data.href === pathname}
                                        >
                                            {data.description}
                                        </ListItem>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
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
            <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground")}
            >
                <Link href={href}>{title}</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

interface ListItemProps {
    href: string;
    className?: string;
    title: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const ListItem = ({ href, className, title, children, isActive }: ListItemProps) => {
    return (
        <NavigationMenuLink asChild>
            <Link
                href={href}
                className={cn(
                    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
                    isActive && "bg-accent text-accent-foreground",
                    className,
                )}
            >
                <div className="text-sm leading-none font-medium">{title}</div>
                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
            </Link>
        </NavigationMenuLink>
    );
};
