"use client";

import React from "react";
import { Navbar } from "@/modules/navbar/navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileNavbar } from "@/modules/navbar/mobile-navbar";
import { usePathname } from "next/navigation";

export const NavigationBar = () => {
    const pathname = usePathname();
    const isMobile = useIsMobile();

    if (isMobile) {
        return <MobileNavbar pathname={pathname} />;
    }

    return <Navbar pathname={pathname} />;
};
