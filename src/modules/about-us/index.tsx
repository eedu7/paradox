import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import CEODEABahawalpurImage from "../../../public/assets/chief-executive-officer-dea-bahawalpur.jpg";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

export const AboutUs = () => {
    return (
        <section className="mx-auto my-12 flex max-w-7xl items-center justify-center">
            <Card className="shadow-md">
                <CardContent className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                    <CardTitle className="hidden"></CardTitle>
                    <AspectRatio ratio={1}>
                        <Image
                            src={CEODEABahawalpurImage}
                            alt="CEO DEA Bahawalpur"
                            className="rounded-lg"
                        />
                    </AspectRatio>
                    <div className="flex flex-col gap-y-2 md:gap-y-4">
                        <h1
                            className={cn(
                                poppins.className,
                                "text-2xl md:text-4xl",
                                "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text p-2 text-transparent",
                            )}
                        >
                            Chief Executive Officer (DEA) Bahawalpur Message
                        </h1>
                        <p className="text-muted-foreground text-xs tracking-wider md:text-base">
                            {
                                "Education is the powerful tool for every field of life. All the developed nations are unsing it intelligently. After 75 years, our beloved country is still behind but at the same time struggling to make progress in every walk of life. In this era of globilization, digital activities are becoming essential item for progress of all resources."
                            }
                        </p>
                        <p className="text-muted-foreground text-xs tracking-wider md:text-base">
                            {
                                "SED (South Punjab) Multan is also striving for quality of education as well as to move towards digital system of education in all sphere in eleven districts of South Punjab. Chief Executive Officer (DEA) Bahawalpur is also struggling for it. There are 192 boys and girls high and higher secondary school having 25000 enrolement of students. In 192 high and higher schools, there are 3215 teaching staff while 1200 non teaching staff. Fortunately, Bahawalpur is better in academic and co-curriculary activities.Launching of webiste of Chief Executive Officer (DEA) Bahawalpur is very first step to make Bahawalpur in leading position in South Pujab. I would like to appreciate Digital Team of Secondary Wing Bahawalpur and pray for their success to keep this pace in future."
                            }
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};
