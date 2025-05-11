import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

export const UnderConstruction = ({ title }: { title: string }) => {
    return (
        <section className="flex h-96 items-center justify-center border">
            <div className="rounded-lg border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 shadow-2xl lg:p-28">
                <p className={cn("tracking-widest text-slate-200 md:text-2xl lg:text-4xl", poppins.className)}>
                    {title}
                </p>
            </div>
        </section>
    );
};
