"use client";
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { aboutUsData } from "@/modules/about-us/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

export const AboutUs = () => {
    const pathname = usePathname();
    return (
        <section
            className={cn(
                "flex min-h-[34rem] flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-black",
                pathname === "/about" && "lg:min-h-[48rem] xl:min-h-[56rem]",
            )}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-center px-2 md:p-4 md:py-10">
                <Card className="rounded-none border-none bg-transparent shadow-none outline-none">
                    <CardContent className="flex flex-col md:flex-row md:gap-x-4">
                        <CardTitle className="hidden"></CardTitle>
                        <div className="flex items-center justify-center md:flex-none">
                            <Image
                                src={aboutUsData.imageSrc}
                                alt={aboutUsData.title}
                                className="h-[256px] w-[256px] lg:h-[384px] lg:w-[384px]"
                            />
                        </div>
                        <div className="mt-4 flex flex-col md:gap-y-4">
                            <h1
                                className={cn(
                                    poppins.className,
                                    "md:text-2xl lg:text-4xl",
                                    "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent",
                                    "text-white",
                                )}
                            >
                                {aboutUsData.title}
                            </h1>
                            <p className="text-xs tracking-wider text-white md:text-sm lg:text-base">
                                {aboutUsData.description[0]}
                            </p>
                            {pathname === "/about" ? (
                                <p className="text-xs tracking-wider text-white md:text-sm lg:text-base">
                                    {aboutUsData.description[1]}
                                </p>
                            ) : (
                                <div className="flex justify-end">
                                    <Link
                                        href="/about"
                                        className="flex-end hover:text- text-indigo-500 underline underline-offset-4 hover:text-indigo-600"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
