"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const AuthButton = () => {
    return (
        <Button
            variant="default"
            className="cursor-pointer"
            onClick={() =>
                signOut({
                    redirectTo: "/admin/login",
                })
            }
        >
            Sign out
        </Button>
    );
};
