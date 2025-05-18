"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuSquareIcon } from "lucide-react";
import { navbarItems, subNavbarLinks } from "@/constants/navbar";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface Props {
    pathname: string;
}

export const MobileNavbar = ({ pathname }: Props) => {
    const [open, onOpenChange] = React.useState<boolean>(false);
    return (
        <Sheet
            open={open}
            onOpenChange={onOpenChange}
        >
            <SheetTrigger asChild>
                <Button variant="outline">
                    <MenuSquareIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="hidden">
                    <SheetTitle>Navigation Links</SheetTitle>
                </SheetHeader>
                <div>
                    <nav>
                        <ul className="flex w-full flex-col">
                            {navbarItems.map(({ title, href }, index) => (
                                <li
                                    key={`${href}_${index}`}
                                    className="w-full"
                                >
                                    <Link
                                        href={href}
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            href === pathname && "bg-accent text-accent-foreground",
                                            "flex w-full items-center justify-start",
                                        )}
                                        onClick={() => onOpenChange(false)}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {subNavbarLinks.map(({ title, links }, index) => (
                            <div
                                key={`${title}_${index}`}
                                className="flex flex-col"
                            >
                                <Separator />
                                <div>
                                    <Label className="text-accent-foreground p-2 text-xs">{title}</Label>
                                    <ul>
                                        {links.map(({ href, title }) => (
                                            <li
                                                key={`${href}_${index}`}
                                                className="w-full"
                                            >
                                                <Link
                                                    href={href}
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        href === pathname && "bg-accent text-accent-foreground",
                                                        "flex w-full items-center justify-start",
                                                    )}
                                                    onClick={() => onOpenChange(false)}
                                                >
                                                    {title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    );
};
