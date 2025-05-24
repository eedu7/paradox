import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma-client";

type RequestBody = {
    name: string;
    phone: string;
    date: string;
    personComplainedAgainst: string;
    incidentDescription: string;
    expectedResolution: string;
};

export async function POST(req: NextRequest) {
    try {
        const body: RequestBody = await req.json();

        console.log("API is being called");

        await prisma.complaint.create({
            data: {
                ...body,
            },
        });

        return NextResponse.json({
            message: "Successfully created a complaint.",
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
