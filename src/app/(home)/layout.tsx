import React from "react";
import { NavigationBar } from "@/modules/navbar";
import { AppWindowIcon } from "lucide-react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="flex items-center justify-between px-2 py-4">
                <div>
                    <AppWindowIcon />
                </div>
                <NavigationBar />
            </header>
            <main className="my-4 flex-1">{children}</main>
            <footer></footer>
        </div>
    );
}
