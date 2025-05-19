import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { OurMissionImage } from "@/constants/images";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ weight: ["600"], subsets: ["latin"] });

export const OurMissionBlog = () => {
    return (
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-md">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
                <div className="space-y-6 text-base leading-relaxed text-gray-700 md:col-span-3">
                    <h1 className={cn(playfair.className, "text-3xl font-semibold text-gray-900")}>Our Mission</h1>
                    <p className={inter.className}>
                        The mission of Scouting is to contribute to the education of young people, through a value
                        system based on the Scout Promise and Law, to help build a better world where people are
                        self-fulfilled as individuals and play a constructive role in society to be the foremost in
                        transforming youth in Pakistan to become agents of change in communities based on shared values,
                        guided by the scout promise and law.
                    </p>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Scout Promise</h4>
                        <p className={inter.className}>
                            I will do my best to do duty to ALLAH and his last Prophet Muhammad P.B.U.H and Pakistan, to
                            help others and to keep the Scout Law.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Scout Law</h4>
                        <p className={inter.className}>
                            A scout is trustworthy, loyal and obedient, courteous and helpful, friend to all and brother
                            to every other scout, kind and courageous, thrifty, clean and cheerful.
                        </p>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <Image
                        src={OurMissionImage}
                        alt="Our mission image"
                        title="Our mission image"
                        className="h-auto w-64 rounded-xl object-contain shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};
