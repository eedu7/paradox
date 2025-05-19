import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";
import { PBSAObjectiveImage } from "@/constants/images";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ weight: ["600"], subsets: ["latin"] });

export const PBSAObjectiveBlog = () => {
    return (
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-md">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
                <div className="space-y-6 text-base leading-relaxed text-gray-700 md:col-span-3">
                    <h1 className={cn(playfair.className, "text-3xl font-semibold text-gray-900")}>
                        PBSA&rsquo;s Objectives
                    </h1>
                    <ul className="list-disc px-4">
                        <li>
                            <p className={inter.className}>
                                To Develop a good citizenship amongst the youth of Pakistan by forming their character.
                            </p>
                        </li>
                        <li>
                            <p className={inter.className}>
                                To promote spiritual, intellectual, physical, emotional and social development in youth.
                            </p>
                        </li>
                        <li>
                            <p className={inter.className}>
                                To create observation, obedience and self-reliance amongst youth.
                            </p>
                        </li>
                        <li>
                            <p className={inter.className}>
                                To in-calculate loyalty to the beloved country and thoughtfulness for others
                            </p>
                        </li>
                        <li>
                            <p className={inter.className}>
                                To teach service, useful to the public and vocational training useful to themselves.
                            </p>
                        </li>
                        <li>
                            <p className={inter.className}>To make useful and helpful community development.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex h-full items-center justify-center">
                    <Image
                        src={PBSAObjectiveImage}
                        alt="PBSA Objective Image"
                        className="h-auto w-64 rounded-xl object-contain shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};
