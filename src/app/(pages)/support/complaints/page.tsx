import React from "react";
import { ComplainView } from "@/components/complaint";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Complain",
};

export default function ComplaintsPage() {
    return (
        <div>
            <ComplainView />
            <Toaster />
        </div>
    );
}
