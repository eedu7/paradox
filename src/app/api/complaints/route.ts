import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { complaints } from "@/db/schema";
import { v4 as uuidv4 } from "uuid";

type RequestBody = {
    name: string;
    phone: string;
    date: string;
    personComplainedAgainst: string;
    incidentDescription: string;
    expectedResolution: string;
};

export async function GET() {
    try {
        console.log("GET");
        const data = await db.select().from(complaints);
        console.log("GET Done");
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                error: "Unknown error: " + error,
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

        await db.insert(complaints).values({
            id: uuidv4(),
            name: body.name,
            phone: body.phone,
            date: body.date,
            personComplainedAgainst: body.personComplainedAgainst,
            incidentDescription: body.incidentDescription,
            expectedResolution: body.expectedResolution,
        });

        return NextResponse.json({
            message: "Successfully created a complaint.",
        });
    } catch (error) {
        return NextResponse.json(
            {
                error: "Unknown error: " + error,
            },
            {
                status: 500,
            },
        );
    }
}
