import React from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { homeTrainingPrograms } from "@/constants/home-how-we-work";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
});

export const HomeHowWeWork = () => {
    return (
        <div className="space-y-16">
            <div>
                <div className="mx-auto max-w-3xl">
                    <h1 className={cn("text-primary text-center text-2xl md:text-4xl", poppins.className)}>
                        Initiatives by the School Education Department (SED), South Punjab
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-2 lg:grid-cols-3">
                {homeTrainingPrograms.map(({ icon: Icon, title, description }, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className="flex gap-2">
                                <div className="flex items-start justify-start">
                                    <Icon />
                                </div>
                                <div className="flex-1">
                                    <CardTitle>{title}</CardTitle>
                                    <CardDescription>{description}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};
