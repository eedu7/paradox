import React from "react";
import { DashboardContact } from "@/components/dashboard-contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard - Contact Messages",
};

export default function DashboardContactPage() {
    return (
        <div className="my-4 md:mt-12 md:mb-6">
            <DashboardContact />
        </div>
    );
}
