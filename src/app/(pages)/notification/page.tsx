import React from "react";
import { Notification } from "@/components/notification";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notifications - DEA Bahawalpur",
};

export default function NotificationPage() {
    return (
        <section className="px-2 py-12">
            <div className="mx-auto max-w-4xl">
                <Notification />
            </div>
        </section>
    );
}
