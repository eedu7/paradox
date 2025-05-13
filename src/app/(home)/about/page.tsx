import React from "react";
import { AboutUs } from "@/modules/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us",
};

export default function AboutPage() {
    return <AboutUs />;
}
