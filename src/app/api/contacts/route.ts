import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma-client";

type RequestBody = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export async function GET() {
    try {
        const data = await prisma.contact.findMany();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                error: "Unknown error" + error,
            },
            {
                status: 500,
            },
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body: RequestBody = await req.json();

        console.log("Contact API is being called");

        await prisma.contact.create({
            data: {
                ...body,
            },
        });

        return NextResponse.json({
            message: "Successfully created a contact message.",
        });
    } catch (error) {
        return NextResponse.json(
            {
                error: "Unknown error" + error,
            },
            {
                status: 500,
            },
        );
    }
}
