"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { AuthButton } from "@/components/navbar/AuthButton";
import { useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuSquareIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

export const DashboardNavbar = () => {
    const mobile: boolean = useIsMobile();
    const pathname = usePathname();

    const session = useSession();

    return (
        <nav className="flex items-center justify-between p-1 md:gap-x-4 md:p-4">
            <pre>{session.status}</pre>
            <Link href="/">
                <h1 className={cn(poppins.className, "text-xl")}>DEA - Bahawalpur</h1>
            </Link>
            <div className="flex md:hidden">
                <Sheet>
                    <SheetHeader>
                        <SheetTrigger>
                            <MenuSquareIcon />
                        </SheetTrigger>
                    </SheetHeader>
                    <SheetContent className="p-2">
                        <SheetTitle>Admin - Navigation Links</SheetTitle>
                        <Separator />
                        <div className="flex flex-col gap-y-4">
                            <Link
                                href="/admin/dashboard/complaints"
                                className="w-full underline"
                            >
                                Complaints
                            </Link>
                            <Link
                                href="/admin/dashboard/messages"
                                className="w-full underline"
                            >
                                Messages
                            </Link>
                            {session.status === "authenticated" && (
                                <>
                                    <Separator className="mt-4 mb-2" />
                                    <AuthButton />
                                </>
                            )}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden space-x-2 md:block">
                <Link href="/admin/dashboard/complaints">
                    <Button
                        variant={pathname === "/admin/dashboard/complaints" ? "default" : "outline"}
                        className="cursor-pointer"
                        size={mobile ? "sm" : "default"}
                    >
                        Complaints
                    </Button>
                </Link>
                <Link href="/admin/dashboard/messages">
                    <Button
                        variant={pathname === "/admin/dashboard/messages" ? "default" : "outline"}
                        className="cursor-pointer"
                        size={mobile ? "sm" : "default"}
                    >
                        Messages
                    </Button>
                </Link>
                {session.status === "authenticated" && <AuthButton />}
            </div>
        </nav>
    );
};
