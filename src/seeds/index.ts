import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { users } from "@/db/schema";
import { hashPassword } from "@/lib/password";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function main() {
    const hashedPassword = await hashPassword("Password@123");

    await db.insert(users).values({
        name: "eedu7",
        email: "eedu7@gmail.com",
        password: hashedPassword,
    });

    console.log("User inserted successfully");
}

main().catch((err) => {
    console.error("Error inserting user:", err);
});
