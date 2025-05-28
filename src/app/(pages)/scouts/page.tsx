import React from "react";
import { ScoutsBlog } from "@/components/scouts-blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Scouts - DEA Bahawalpur",
};

export default function ScoutsPage() {
    return (
        <section className="px-2 py-12">
            <div className="mx-auto max-w-4xl">
                <ScoutsBlog />
            </div>
        </section>
    );
}
