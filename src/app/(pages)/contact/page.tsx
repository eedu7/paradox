import React from "react";
import { ContactUsView } from "@/components/contact";
import { TanstackReactQueryProvider } from "@/lib/TanstackReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";

export default function ContactPage() {
    return (
        <TanstackReactQueryProvider>
            <ContactUsView />
            <Toaster />
        </TanstackReactQueryProvider>
    );
}
