"use client";
import React from "react";
import { useAPI } from "@/hooks/use-api";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDateTime";

type ContactData = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    createdAt: string;
};

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
                        <CardDescription>{data.message}</CardDescription>
                    </CardHeader>
                    <CardFooter className="text-secondary-foreground text-sm">{formatDate(data.createdAt)}</CardFooter>
                </Card>
            ))}
        </div>
    );
};
