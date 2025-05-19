"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
    return (
        <footer className="space-y-2">
            <Separator />
            <div className="flex h-full w-full items-center justify-center text-sm">
                <p>
                    Copyright ©{" "}
                    <strong
                        onClick={() => (window.location.href = "/")}
                        className="text-primary cursor-pointer hover:underline"
                    >
                        DEA Bahawalpur
                    </strong>{" "}
                    2025. All Right Reserved
                </p>
            </div>
        </footer>
    );
};
