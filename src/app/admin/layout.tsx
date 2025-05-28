import React from "react";
import { TanstackReactQueryProvider } from "@/lib/TanstackReactQueryProvider";
import { SessionProvider } from "next-auth/react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <TanstackReactQueryProvider>
            <SessionProvider>{children}</SessionProvider>
        </TanstackReactQueryProvider>
    );
}
