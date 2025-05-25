import React from "react";
import { ContactUsView } from "@/components/contact";
import { Toaster } from "@/components/ui/sonner";

export default function ContactPage() {
    return (
        <div>
            <ContactUsView />
            <Toaster />
        </div>
    );
}
