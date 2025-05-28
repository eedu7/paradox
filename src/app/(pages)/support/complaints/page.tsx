import React from "react";
import { ComplainView } from "@/components/complaint";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { TanstackReactQueryProvider } from "@/lib/TanstackReactQueryProvider";

export const metadata: Metadata = {
    title: "Complain",
};

export default function ComplaintsPage() {
    return (
        <TanstackReactQueryProvider>
            <div>
                <ComplainView />
                <Toaster />
            </div>
        </TanstackReactQueryProvider>
    );
}
