"use client";
import React from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { MobileNavbar } from "@/components/navbar/MobileNavbar";
import { WebNavbar } from "@/components/navbar/WebNavbar";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const isMobile: boolean = useIsMobile();

    const pathname = usePathname();

    if (isMobile) {
        return <MobileNavbar pathname={pathname} />;
    } else {
        return <WebNavbar pathname={pathname} />;
    }
};
