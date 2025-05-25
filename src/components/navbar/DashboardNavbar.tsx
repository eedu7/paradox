"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

export const DashboardNavbar = () => {
    const mobile: boolean = useIsMobile();
    const pathname = usePathname();
    return (
        <nav className="flex items-center justify-between p-1 md:gap-x-4 md:p-4">
            <Link href="/">
                <h1 className={cn(poppins.className, "text-xl")}>DEA - Bahawalpur</h1>
            </Link>
            <div className="space-x-2">
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
            </div>
        </nav>
    );
};
