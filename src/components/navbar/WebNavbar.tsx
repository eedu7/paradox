import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getAllSubNavHrefs, navbarItems, subNavbarLinks } from "@/constants/navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

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
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            getAllSubNavHrefs().includes(pathname) && "bg-accent text-accent-foreground",
                            "cursor-pointer focus:bg-transparent active:bg-transparent",
                        )}
                    >
                        More
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex w-[720px] gap-x-4">
                        {subNavbarLinks.map(({ title, links }, index) => (
                            <div key={`${title}_${index}`}>
                                <Label className="text-accent-foreground px-4 py-2 text-xs">{title}</Label>
                                <div>
                                    {links.map(({ href, title }) => (
                                        <Link
                                            key={`${href}_${title}`}
                                            href={href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                href === pathname && "bg-accent text-accent-foreground",
                                            )}
                                        >
                                            {title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </NavigationMenuContent>
                </NavigationMenuItem>
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
