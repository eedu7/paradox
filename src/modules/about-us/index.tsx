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
        <section className="mx-auto my-8 flex max-w-7xl items-center justify-center p-2 md:my-12 md:p-4">
            <Link href="/about">
                <Card className="rounded-none">
                    <CardContent className="flex flex-col md:flex-row md:gap-x-4">
                        <CardTitle className="hidden"></CardTitle>
                        <div className="flex items-center justify-center">
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
                                    "md:text-lg lg:text-4xl",
                                    "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent md:p-2",
                                )}
                            >
                                {aboutUsData.title}
                            </h1>
                            <p className="text-muted-foreground text-[8px] tracking-wider md:text-xs lg:text-base">
                                {aboutUsData.description[0]}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </section>
    );
};
