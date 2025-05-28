import React from "react";
import { Footer } from "@/components/footer";
import { DashboardNavbar } from "@/components/navbar/DashboardNavbar";
import { auth } from "@/auth";

export default async function Dashboard({ children }: { children: React.ReactNode }) {
    const session = await auth();

    if (!session?.user) return null;

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
