"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/modules/navbar/navbar";
import { useIsMobile } from "@/hooks/use-mobile";

export const NavigationBar = () => {
    const pathname = usePathname();

    const isMobile = useIsMobile();

    if (isMobile) {
        return null;
    }

    return <Navbar pathname={pathname} />;
};
