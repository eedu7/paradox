"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAPI } from "@/hooks/use-api";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
});

// TODO: Add constains also in the complinats as well
const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    message: z.string(),
});

export const ContactUsView = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    });

    const { contact } = useAPI();

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        contact.mutate(values, {
            onSuccess: () => {
                toast("Message has been delivered", {
                    position: "top-right",
                    style: {
                        borderColor: "green",
                        color: "green",
                    },
                });
            },
        });

        form.reset({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });
    };

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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card className="bg-white">
                        <CardHeader>
                            <CardTitle className={cn("text-primary text-lg", poppins.className)}>
                                Get in Touch
                            </CardTitle>
                            <CardDescription className="text-secondary-foreground">
                                You can reach us anytime
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 md:space-y-8">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-primary text-sm font-semibold">
                                                Fist Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="First Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-primary text-sm font-semibold">
                                                Last Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Last Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="text-primary text-sm font-semibold">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-primary text-sm font-semibold">
                                                Message
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className="max-h-64 min-h-32"
                                                    placeholder="Your message"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
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
            </Form>
        </section>
    );
};
