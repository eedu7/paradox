import React from "react";
import { EventsView } from "@/components/events";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events - DEA Bahawalpur",
};

export default function EventsPage() {
    return (
        <section className="px-2 py-12">
            <div className="mx-auto max-w-4xl">
                <EventsView />
            </div>
        </section>
    );
}
