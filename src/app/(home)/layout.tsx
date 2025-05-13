import React from "react";
import { NavigationBar } from "@/modules/navbar";
import { AppWindowIcon, CopyrightIcon } from "lucide-react";
import { Footer } from "@/modules/footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="flex items-center justify-between p-2">
                <div>
                    <AppWindowIcon />
                </div>
                <NavigationBar />
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
            <div className="flex items-center justify-center bg-gradient-to-r from-slate-500 to-slate-800 p-2">
                <p className="flex items-center gap-1 text-sm text-white">
                    Copyright <CopyrightIcon className="size-4" />
                    <span className="font-bold">DEA Bahawalpur</span> {new Date().getFullYear()}. All Right Reserved.
                </p>
            </div>
        </div>
    );
}
