import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contacts } from "@/db/schema";
import { v4 as uuidv4 } from "uuid";

type RequestBody = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export async function GET() {
    try {
        const data = await db.select().from(contacts);
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

        console.log("Contact API is being called");

        await db.insert(contacts).values({
            id: uuidv4(),
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            message: body.message,
        });

        return NextResponse.json({
            message: "Successfully created a contact message.",
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
