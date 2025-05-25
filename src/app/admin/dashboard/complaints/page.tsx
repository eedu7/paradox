import React from "react";
import { DashboardComplaint } from "@/components/dashboard-complaint";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard - Complaints",
};

export default function DashboardComplaintsPage() {
    return (
        <div className="my-4 md:mt-12 md:mb-6">
            <DashboardComplaint />
        </div>
    );
}
