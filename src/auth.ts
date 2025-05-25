import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { hashPassword } from "@/lib/password";
import { prisma } from "@/lib/prisma-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    type: "email",
                    label: "Email",
                    placeholder: "johndoe@gmail.com",
                },
                password: {
                    type: "password",
                    label: "Password",
                    placeholder: "********",
                },
            },
            authorize: async (credentials) => {
                let user = null;

                const pwHash = await hashPassword(credentials.password as string);

                user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email as string,
                        password: pwHash,
                    },
                });

                if (!user) {
                    throw new Error("Invalid credentials");
                }
                return user;
            },
        }),
    ],
});
