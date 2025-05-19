import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { OurMissionImage } from "@/constants/images";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ weight: ["600"], subsets: ["latin"] });

export const STEMCompetition = () => {
    return (
        <div className="space-y-8 p-6">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
                <div className="space-y-6 text-sm leading-relaxed text-gray-700 md:col-span-3">
                    <h1 className={cn(playfair.className, "text-primary text-3xl font-semibold")}>Steam Competition</h1>
                    <p className={inter.className}>
                        TEAM Pakistan is an initiative of the Ministry of Federal Education and Professional Training
                        (MoFEPT) that aims to advance secondary school-aged girls’ access to Science, Technology,
                        Engineering, Arts, and Mathematics education in Pakistan.
                    </p>
                    <p>
                        The goal of this initiative is to equip and empower government schools to deliver world class
                        STEAM education by offering back-end technical support and working towards policy reforms which
                        embed the initiative’s learning in the existing state structures.
                    </p>
                    <div className="grid h-full grid-cols-4 items-center justify-center gap-4">
                        {/*TODO: Add images not the same image*/}
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
                        <Image
                            src={OurMissionImage}
                            alt="Our mission image"
                            title="Our mission image"
                            className="h-auto w-64 rounded-xl object-contain shadow-sm"
                        />
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
