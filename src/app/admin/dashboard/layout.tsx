"use client";

import React from "react";
import { Footer } from "@/components/footer";
import { DashboardNavbar } from "@/components/navbar/DashboardNavbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard({ children }: { children: React.ReactNode }) {
    const { status } = useSession();

    const router = useRouter();

    React.useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login");
        }
    }, [status, router]);

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
