import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
});

export const ContactUsView = () => {
    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 space-y-8 px-2 py-12 md:grid-cols-2">
            <div className="flex flex-1 flex-col items-center justify-start py-2">
                <h1 className={cn(poppins.className, "text-xl lg:text-4xl")}>Contact Us</h1>
                <div className="space-y-4 p-4 text-sm">
                    <p>
                        <strong>Office of the Chief Executive Officer</strong> District Education Authority, 20-C Model
                        Town ‘A’ Bahawalpur
                    </p>
                    <p className="space-x-2">
                        <strong>Telephone:</strong>
                        <a href="tel:062-9255115">(062) 9255115</a>
                    </p>
                    <p className="space-x-2">
                        <strong>Email:</strong>
                        <a
                            href="mailto:deabahawalpurpb.pk@gmail.com"
                            className="underline underline-offset-4"
                        >
                            deabahawalpurpb.pk@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <form>
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className={cn("text-primary text-lg", poppins.className)}>Get in Touch</CardTitle>
                        <CardDescription className="text-secondary-foreground">
                            You can reach us anytime
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 md:space-y-8">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <input
                                placeholder="First name"
                                name="firstName"
                                type="text"
                                className="w-full rounded-xl border p-2 md:px-4 md:py-2"
                            />
                            <input
                                placeholder="Last name"
                                name="lastName"
                                type="text"
                                className="w-full rounded-xl border p-2 md:px-4 md:py-2"
                            />
                        </div>
                        <input
                            placeholder="Your email"
                            name="email"
                            type="email"
                            className="w-full rounded-xl border p-2 md:px-4 md:py-2"
                        />
                        <div className="h-32 w-full">
                            <Textarea
                                placeholder="How can we help?"
                                className="h-full w-full rounded-xl p-2 md:px-4 md:py-2"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex items-center gap-2">
                        <Button
                            type="submit"
                            className="cursor-pointer"
                        >
                            Send message
                        </Button>
                        <Link href="/support/complaints">
                            <Button
                                variant="outline"
                                type="button"
                                className="cursor-pointer"
                            >
                                Have a complain?
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </form>
        </section>
    );
};
