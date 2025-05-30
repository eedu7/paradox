"use client";

import React from "react";
import { DashboardNavbar } from "@/components/navbar/DashboardNavbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    email: z.string({ required_error: "Email is required" }).email({ message: "Please enter a valid email address" }),
    password: z.string({ required_error: "Password is required" }).min(1, { message: "Password cannot be empty" }),
});

export const LoginView = () => {
    const id = React.useId();

    const router = useRouter();
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "all",
    });

    const loginMutation = useMutation({
        mutationFn: async ({ email, password }: { email: string; password: string }) => {
            const response = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
            });
            if (!response?.ok) {
                throw new Error("Invalid credentials");
            }

            return response;
        },
        onSuccess: () => {
            router.push("/admin/dashboard/messages");
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        loginMutation.mutate(values);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <div className="border-b">
                <div className="mx-auto max-w-7xl">
                    <DashboardNavbar />
                </div>
            </div>
            <section className="flex h-full flex-1 items-center justify-center">
                <Card className="bg-accent/20 shadow-accent w-[350px] shadow-lg">
                    <CardHeader>
                        <CardTitle>Sign in to your account</CardTitle>
                        <CardDescription>Enter your email and password below to access the dashboard.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-primary text-sm font-semibold">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-primary text-sm font-semibold">
                                                Password
                                            </FormLabel>
                                            <FormControl>
                                                <div>
                                                    <div className="*:not-first:mt-2">
                                                        <div className="relative">
                                                            <Input
                                                                id={id}
                                                                className="pe-9"
                                                                placeholder="Password"
                                                                type={isVisible ? "text" : "password"}
                                                                {...field}
                                                            />
                                                            <button
                                                                className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 cursor-pointer items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                                                type="button"
                                                                onClick={toggleVisibility}
                                                                aria-label={
                                                                    isVisible ? "Hide password" : "Show password"
                                                                }
                                                                aria-pressed={isVisible}
                                                                aria-controls="password"
                                                            >
                                                                {isVisible ? (
                                                                    <EyeOffIcon
                                                                        size={16}
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <EyeIcon
                                                                        size={16}
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full cursor-pointer"
                                    disabled={loginMutation.isPending}
                                >
                                    {loginMutation.isPending ? (
                                        <p className="flex items-center gap-2">
                                            <LoaderCircle className="repeat-infinite animate-spin" />
                                            Logging...
                                        </p>
                                    ) : (
                                        <p>Log in</p>
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-muted-foreground mt-auto w-full border-t py-4 text-center text-sm">
                            Only admin and staff users are allowed to log in.
                        </p>
                    </CardFooter>
                </Card>
            </section>
            <Footer />
        </div>
    );
};
