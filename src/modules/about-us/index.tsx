import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { aboutUsData } from "@/modules/about-us/constants";
import Link from "next/link";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

export const AboutUs = () => {
    return (
        <section className="mx-auto flex max-w-7xl items-center justify-center px-2 py-10 md:p-4">
            <div className="my-8">
                <Link href="/about">
                    <Card className="rounded-none">
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
                                    )}
                                >
                                    {aboutUsData.title}
                                </h1>
                                <p className="text-muted-foreground text-[8px] tracking-wider md:text-sm lg:text-base">
                                    {aboutUsData.description[0]}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </section>
    );
};
