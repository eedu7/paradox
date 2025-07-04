import React from "react";
import { Message } from "@/components/message";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - DEA Bahawalpur",
};

export default function AboutPage() {
    return (
        <section className="px-2 py-12">
            <div className="mx-auto max-w-4xl">
                <Message />
            </div>
        </section>
    );
}
