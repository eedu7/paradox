import React from "react";
import { ComplainView } from "@/components/complaint";
import { Metadata } from "next";
import { TanstackReactQueryProvider } from "@/lib/TanstackReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Complain",
};

export default function ComplaintsPage() {
    return (
        <TanstackReactQueryProvider>
            <ComplainView />
            <Toaster />
        </TanstackReactQueryProvider>
    );
}
