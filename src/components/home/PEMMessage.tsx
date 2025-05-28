import React from "react";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
});

export const PemMessage = () => {
    return (
        <div className="flex flex-col gap-y-12">
            <div className="space-y-2">
                <h1 className={cn("text-primary text-center text-2xl md:text-4xl", poppins.className)}>
                    A Message from Punjab Education Minister Rana Sikandar Hayat
                </h1>
                <p className="text-accent-foreground text-center text-sm md:text-lg">
                    The Education Minister shares his and the Chief Minister’s vision to improve Punjab's education
                    system through public engagement, recognizing excellent educators, addressing challenges, and
                    encouraging community contributions for better infrastructure and IT facilities.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <iframe
                    className="h-48 w-96 md:h-[24rem] md:w-[44rem]"
                    src="https://www.youtube.com/embed/7NrTVcRwpaI?si=yjC4jTZT-G4jDoYO"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};
