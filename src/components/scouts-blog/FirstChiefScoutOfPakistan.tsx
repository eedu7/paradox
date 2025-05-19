import React from "react";
import Image from "next/image";
import { Inter, Merriweather, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { FirstChiefScoutOfPakistanImage } from "@/constants/images";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ weight: ["600"], subsets: ["latin"] });

const getMerriWeather = Merriweather({
    weight: ["400", "700"],
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export const FirstChiefScoutOfPakistanBlog = () => {
    return (
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-md">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
                <div className="space-y-6 text-base leading-relaxed text-gray-700 md:col-span-3">
                    <h1 className={cn(playfair.className, "text-primary text-3xl font-semibold")}>
                        First Chief Scout of Pakistan
                    </h1>
                    <p className={inter.className}>
                        Founder of Pakistan Quaid-e-Azam Muhammad Ali Jinnah was the first Chief Scout of Pakistan. On
                        22nd December, 1947 while taking an oath Quaid-e-Azam’s everlasting message is:
                    </p>
                    <div className="space-y-2 text-sm">
                        <blockquote className={getMerriWeather.className}>
                            &ldquo;Scouting can play a vital role in forming the character of our youth, promoting their
                            physical, mental, and spiritual development and making them well disciplined, useful and
                            good citizen.
                        </blockquote>
                        <blockquote className={getMerriWeather.className}>
                            We are living in a far from perfect world. Despite the progress of civilization, the law of
                            the jungle, unfortunately, still prevails. Might is considered right and the strong do not
                            refrain from exploiting the weak. Self-advancement, greed and lust for power sway the
                            conduct of the individuals as that of nations.&rdquo;
                        </blockquote>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <Image
                        src={FirstChiefScoutOfPakistanImage}
                        alt="First Chief Scout of Pakistan"
                        title="First Chief Scout of Pakistan"
                        className="h-auto w-64 rounded-xl object-contain shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};
