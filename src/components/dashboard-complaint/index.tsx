"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDateTime";
import { useAPI } from "@/hooks/use-api";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    weight: ["600"],
    subsets: ["latin"],
});

export const DashboardComplaint = () => {
    const { getComplaint } = useAPI();
    return (
        <div className="mx-auto max-w-4xl space-y-4 p-1 md:space-y-8 md:p-2">
            {getComplaint.data?.map((data, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardDescription>Complaint Summary</CardDescription>
                        <CardTitle className="text-primary">Complain ID: {data.id}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between border-b">
                            <div className="flex w-full flex-col items-start">
                                <h2 className="text-primary text-sm font-semibold">Complainant</h2>
                                <p>{data.name}</p>
                            </div>
                            <div className="flex w-full flex-col items-start">
                                <h2 className="text-primary text-sm font-semibold">Phone</h2>
                                <p>{data.phone}</p>
                            </div>
                            <div className="flex w-full flex-col items-start">
                                <h2 className="text-primary text-sm font-semibold">Against</h2>
                                <p>{data.personComplainedAgainst}</p>
                            </div>
                        </div>

                        <div className="space-y-1 border-b">
                            <h2 className={cn(poppins.className, "text-primary text-sm")}>Incident</h2>
                            <p>{data.incidentDescription}</p>
                        </div>
                        <div className="space-y-1 border-b">
                            <h2 className={cn(poppins.className, "text-primary text-sm")}>Expected Resolution</h2>
                            <p>{data.expectedResolution}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="text-secondary-foreground text-sm">
                        <span className="mr-2 font-semibold">Date of Incident:</span> {formatDate(data.date)}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};
