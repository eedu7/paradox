import React from "react";

import { DashboardNavbar } from "@/components/navbar/DashboardNavbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - Dashboard",
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="border-b">
                <div className="mx-auto max-w-7xl">
                    <DashboardNavbar />
                </div>
            </div>
            <section className="flex h-full flex-1 items-center justify-center">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Sign in to your account</CardTitle>
                        <CardDescription>Enter your email and password below to access the dashboard.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            action={async (formData) => {
                                "use server";
                                await signIn("credentials", formData);
                            }}
                            className="space-y-4"
                        >
                            <div className="space-y-1">
                                <Label className="text-primary text-sm font-semibold">Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-primary text-sm font-semibold">Password</Label>
                                <Input
                                    name="password"
                                    type="password"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                            >
                                Sign In
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </section>
            <Footer />
        </div>
    );
}
