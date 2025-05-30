import React from "react";
import { Metadata } from "next";
import { LoginView } from "@/app/admin/login/LoginView";

export const metadata: Metadata = {
    title: "Login - Dashboard",
};

export default function LoginPage() {
    return <LoginView />;
}
