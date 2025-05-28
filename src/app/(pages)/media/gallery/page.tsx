import React from "react";
import { Gallery } from "@/components/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery - DEA Bahawalpur",
};

export default function GalleryPage() {
    return (
        <section className="px-2 py-12">
            <div className="mx-auto max-w-7xl">
                <Gallery />
            </div>
        </section>
    );
}
