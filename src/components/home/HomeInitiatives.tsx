import React from "react";
import { homeInitiativesData } from "@/constants/home-initiavites";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
});

export const HomeInitiatives = () => {
    return (
        <div className="space-y-8">
            <div className="mx-auto max-w-3xl">
                <h1 className={cn("text-primary text-center text-2xl md:text-4xl", poppins.className)}>
                    Initiatives by the School Education Department (SED), South Punjab
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-3 lg:grid-cols-4">
                {homeInitiativesData.map(({ title, description, icon: Icon }, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className="flex gap-2">
                                <CardDescription>
                                    <Icon />
                                </CardDescription>
                                <div>
                                    <CardTitle className="text-primary">{title}</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-accent-foreground text-sm">{description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
