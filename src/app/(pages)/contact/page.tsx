import React from "react";
import { ContactUsView } from "@/components/contact";
import { Toaster } from "@/components/ui/sonner";
import { TanstackReactQueryProvider } from "@/lib/TanstackReactQueryProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - DEA Bahawalpur",
};

export default function ContactPage() {
    return (
        <TanstackReactQueryProvider>
            <div>
                <ContactUsView />
                <Toaster />
            </div>
        </TanstackReactQueryProvider>
    );
}
