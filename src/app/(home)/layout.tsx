import React from "react";
import { NavigationBar } from "@/modules/navbar";
import { AppWindowIcon } from "lucide-react";

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
            <footer></footer>
        </div>
    );
}
