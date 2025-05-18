import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

import LogoImage from "../../public/assets/icons/Logo.png";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DEA Bahawalpur",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}>
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
            </body>
        </html>
    );
}
