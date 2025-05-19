import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { PrideOfPakistanImage } from "@/constants/images";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ weight: ["600"], subsets: ["latin"] });

export const PrideOfPakistanBlog = () => {
    return (
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-md">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
                <div className="space-y-6 text-base leading-relaxed text-gray-700 md:col-span-3">
                    <h1 className={cn(playfair.className, "text-primary text-3xl font-semibold")}>
                        Pride of Pakistan - History
                    </h1>
                    <p className={inter.className}>
                        Quaid-e-Azam Muhammad Ali Jinnah founder of Pakistan was much impressed by the passions of Boy
                        Scouts who hoisted the National Flag of Pakistan during 6th world Scout Jamboree in France on
                        14th August 1947, the existence day of Pakistan. He existence day of Pakistan. He invited those
                        scouts on 14th October 1947
                    </p>
                </div>
                <div className="flex h-full items-center justify-center">
                    <Image
                        src={PrideOfPakistanImage}
                        alt="Pride of Pakistan"
                        title="Pride of Pakistan"
                        className="h-auto w-64 rounded-xl object-contain shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};
