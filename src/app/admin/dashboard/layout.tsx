import React from "react";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { DashboardNavbar } from "@/components/navbar/DashboardNavbar";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="w-full border-b">
                <div className="mx-auto w-full max-w-7xl">
                    <DashboardNavbar />
                </div>
            </div>
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
