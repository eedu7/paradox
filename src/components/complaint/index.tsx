"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useAPI } from "@/hooks/use-api";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().regex(/^\+?\d{10,15}$/, "Invalid phone number format"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
    personComplainedAgainst: z.string().min(2, "Please provide a name"),
    incidentDescription: z.string().min(10, "Description must be at least 10 characters"),
    expectedResolution: z.string().min(5, "Please describe your expected resolution"),
});

export const ComplainView = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            date: `${new Date()}`,
            personComplainedAgainst: "",
            incidentDescription: "",
            expectedResolution: "",
        },
    });

    const { createComplaint } = useAPI();
    const queryClient = useQueryClient();

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        createComplaint.mutate(values, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["getComplaints"] });
                toast("Complaint has been filed successfully!", {
                    position: "top-right",
                    style: {
                        borderColor: "green",
                        color: "green",
                    },
                });
                form.reset({
                    name: "",
                    phone: "",
                    date: `${new Date()}`,
                    personComplainedAgainst: "",
                    incidentDescription: "",
                    expectedResolution: "",
                });
            },
        });
    };

    return (
        <section>
            <div className="mx-auto mt-8 max-w-7xl p-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <Card className="shadow-xl">
                            <CardHeader>
                                <CardTitle></CardTitle>
                                <CardDescription></CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center justify-between gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="text-primary text-sm font-semibold">
                                                    Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-sm" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="text-primary text-sm font-semibold">
                                                    Phone Number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Phone Number"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-sm" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="text-primary text-sm font-semibold">
                                                    Date of Incident
                                                </FormLabel>
                                                <FormControl>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-full justify-start text-left font-normal",
                                                                    !field.value && "text-muted-foreground",
                                                                )}
                                                            >
                                                                <CalendarIcon />
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span>Pick a date</span>
                                                                )}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent
                                                            className="w-auto p-0"
                                                            align="start"
                                                        >
                                                            <Calendar
                                                                mode="single"
                                                                selected={
                                                                    field.value ? new Date(field.value) : undefined
                                                                }
                                                                onSelect={(date) => {
                                                                    if (date) {
                                                                        field.onChange(date.toISOString());
                                                                    }
                                                                }}
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </FormControl>
                                                <FormMessage className="text-sm" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="personComplainedAgainst"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-primary text-sm font-semibold">
                                                Complaint Against (name of person)
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Complaint Against"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-sm" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="incidentDescription"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-primary text-sm font-semibold">
                                                Please describe the incident you would like to report
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className="max-h-64 min-h-32"
                                                    placeholder="Complaint Against"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-sm" />
                                        </FormItem>
                                    )}
                                />{" "}
                                <FormField
                                    control={form.control}
                                    name="expectedResolution"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-primary text-sm font-semibold">
                                                How would you like to see this incident resolved?
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className="max-h-64 min-h-32"
                                                    placeholder="Complaint Against"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-sm" />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter className="flex items-center gap-4">
                                <Button
                                    type="submit"
                                    className="cursor-pointer"
                                    disabled={createComplaint.isPending}
                                >
                                    {createComplaint.isPending ? (
                                        <div className="flex w-full items-center justify-center">
                                            <Loader className="repeat-infinite animate-spin" />
                                        </div>
                                    ) : (
                                        <p>Complain</p>
                                    )}
                                </Button>
                                <Link href="/contact">
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="cursor-pointer"
                                        disabled={createComplaint.isPending}
                                    >
                                        Contact us?
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </form>
                </Form>
            </div>
        </section>
    );
};
