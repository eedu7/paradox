import React from "react";
import { howWeWorkData } from "@/modules/how-we-work/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/poppins";

export const HowWeWork = () => {
    return (
        <section className="flex min-h-[34rem] flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-black">
            <div className="mx-auto max-w-7xl space-y-12 p-2 md:py-10">
                <div className="text-center">
                    <h1 className={cn("text-4xl text-zinc-100", poppins.className)}>How we work?</h1>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {howWeWorkData.map(({ title, description, imageSrc }) => (
                        <div
                            key={title}
                            className="grid grid-cols-4 border-b p-2 lg:border-r"
                        >
                            <div className="col-span-3">
                                <h1 className={cn(poppins.className, "text-lg text-zinc-100")}>{title}</h1>
                                <p className="text-[10px] text-zinc-200 md:text-sm">{description}</p>
                            </div>
                            <div className="grid place-content-center">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
