import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChiefExecutiveOfficerDEABahawalpurImage } from "@/constants/images";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
});

export const HomeCEOMessage = () => {
    return (
        <div className="w-full space-y-4">
            <div className="space-y-2">
                <h1 className={cn("text-primary text-center text-2xl md:text-4xl", poppins.className)}>
                    Message from the Chief Executive Officer - DEA Bahawalpur
                </h1>
                <p className="text-accent-foreground text-center text-sm md:text-lg">
                    A note of vision and commitment towards digital transformation and quality education in South
                    Punjab.
                </p>
            </div>
            <div className="flex w-full items-center justify-center">
                <Card>
                    <CardHeader>
                        <div className="flex flex-col items-center justify-center gap-y-8">
                            <Image
                                src={ChiefExecutiveOfficerDEABahawalpurImage}
                                alt="Chief Executive of officer Bahawalpur"
                                className="size-44 rounded-full"
                            />
                            <div className="space-y-4 text-center">
                                <CardTitle className="text-primary text-2xl">Tawakkal Hussain</CardTitle>
                                <CardDescription className="text-accent-foreground">
                                    Chief Executive Office - DEA Bahawalpur
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="text-accent-foreground space-y-4 text-justify text-sm md:text-base">
                        <p>
                            Education is the powerful tool for every field of life. All the developed nations are using
                            it intelligently. After 75 years, our beloved country is still behind but at the same time
                            struggling to make progress in every walk of life. In this era of globalization, digital
                            activities are becoming essential for the progress of all resources.
                        </p>
                        <p>
                            SED (South Punjab) Multan is also striving for quality education as well as transitioning
                            towards a digital system of education across the eleven districts of South Punjab. The Chief
                            Executive Officer (DEA) Bahawalpur is also actively contributing to this mission. There are
                            192 boys’ and girls’ high and higher secondary schools having a total enrollment of 25,000
                            students. These schools are staffed by 3,215 teaching and 1,200 non-teaching personnel.
                        </p>
                        <p>
                            Fortunately, Bahawalpur is already performing well in academic and co-curricular activities.
                            The launch of the website of the Chief Executive Officer (DEA) Bahawalpur is the first step
                            towards making Bahawalpur a leading district in South Punjab. I appreciate the Digital Team
                            of the Secondary Wing Bahawalpur and pray for their continued success in maintaining this
                            momentum.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
