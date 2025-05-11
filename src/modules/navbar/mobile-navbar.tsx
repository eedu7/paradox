"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { navbarItems, subNavItems } from "@/modules/navbar/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const MobileNavbar = ({ pathname }: { pathname: string }) => {
    const [open, onOpenChange] = React.useState(false);
    return (
        <Sheet
            open={open}
            onOpenChange={onOpenChange}
            defaultOpen={false}
        >
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                >
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="hidden">Navigation Links</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1">
                    {navbarItems.map(({ href, title }) => (
                        <MobileNavbarItem
                            href={href}
                            key={href}
                            title={title}
                            pathname={pathname}
                            onOpenChange={onOpenChange}
                        />
                    ))}
                    {subNavItems[0].map(({ href, title }) => (
                        <MobileNavbarItem
                            href={href}
                            key={href}
                            title={title}
                            pathname={pathname}
                            onOpenChange={onOpenChange}
                        />
                    ))}
                    {subNavItems[1].map(({ href, title }) => (
                        <MobileNavbarItem
                            href={href}
                            key={href}
                            title={title}
                            pathname={pathname}
                            onOpenChange={onOpenChange}
                        />
                    ))}
                    {subNavItems[2].map(({ href, title }) => (
                        <MobileNavbarItem
                            href={href}
                            key={href}
                            title={title}
                            pathname={pathname}
                            onOpenChange={onOpenChange}
                        />
                    ))}
                    {subNavItems[3].map(({ href, title }) => (
                        <MobileNavbarItem
                            href={href}
                            key={href}
                            title={title}
                            pathname={pathname}
                            onOpenChange={onOpenChange}
                        />
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

interface MobileNavbarItemProps {
    title: string;
    href: string;
    pathname: string;
    onOpenChange: (open: boolean) => void;
}

const MobileNavbarItem = ({ title, href, pathname, onOpenChange }: MobileNavbarItemProps) => {
    return (
        <Link
            href={href}
            className="w-full"
            onClick={() => onOpenChange(false)}
        >
            <Button
                className={cn(
                    "flex w-full cursor-pointer justify-start",
                    pathname === href && "bg-accent text-muted-foreground",
                )}
                variant="ghost"
            >
                {title}
            </Button>
        </Link>
    );
};
