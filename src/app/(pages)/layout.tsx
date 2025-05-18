import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";

import LogoImage from "../../../public/assets/icons/Logo.png";

interface Props {
    children: React.ReactNode;
}

export default function PagesLayout({ children }: Props) {
    return (
        <div className="flex min-h-screen flex-col">
            <header>
                <div className="mx-auto flex max-w-7xl items-center justify-between p-2">
                    <div>
                        <Image
                            src={LogoImage}
                            alt="Logo"
                            className="size-12"
                        />
                    </div>
                    <Navbar />
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer></footer>
        </div>
    );
}
