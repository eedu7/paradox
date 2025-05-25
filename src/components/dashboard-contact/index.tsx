"use client";
import React from "react";
import { useAPI } from "@/hooks/use-api";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDateTime";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

type ContactData = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    createdAt: string;
};

const poppins = Poppins({
    weight: ["600"],
    subsets: ["latin"],
});

export const DashboardContact = () => {
    const { getContact } = useAPI();

    return (
        <div className="mx-auto max-w-4xl space-y-4 p-1 md:space-y-8 md:p-2">
            {getContact.data?.map((data: ContactData, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <p className="text-primary">{data.firstName + " " + data.lastName}</p>
                            <p className="text-secondary-foreground text-sm font-semibold">{data.email}</p>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-1 border-b">
                            <h2 className={cn(poppins.className, "text-primary text-sm")}>Message</h2>
                            <p>{data.message}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="text-secondary-foreground text-sm">{formatDate(data.createdAt)}</CardFooter>
                </Card>
            ))}
        </div>
    );
};
