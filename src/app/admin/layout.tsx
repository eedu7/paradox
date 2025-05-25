import React from "react";
import { TanstackReactQueryProvider } from "@/lib/TanstackReactQueryProvider";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return <TanstackReactQueryProvider>{children}</TanstackReactQueryProvider>;
}
