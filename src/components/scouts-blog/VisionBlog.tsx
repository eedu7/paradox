import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { VisionImage } from "@/constants/images";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ weight: ["600"], subsets: ["latin"] });

export const VisionBlog = () => {
    return (
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-md">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
                <div className="space-y-6 text-base leading-relaxed text-gray-700 md:col-span-3">
                    <h1 className={cn(playfair.className, "text-primary text-3xl font-semibold")}>Vision</h1>
                    <p className={inter.className}>
                        By the year 2025 Pakistan Scouts Association with 01 million membership will be a dynamics, self
                        reliant, co-educational youth organization extending to all sectors of the society providing
                        value based, challenging and attractive youth program through efficient leaders and effective
                        organizational management, enjoying government and public support, making a significant
                        contribution to the society and the country.
                    </p>
                </div>
                <div className="flex h-full items-center justify-center">
                    <Image
                        src={VisionImage}
                        alt="Our Vision"
                        title="Our Vision"
                        className="h-auto w-64 rounded-xl object-contain shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};
