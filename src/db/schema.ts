import { pgTable, text, timestamp, unique, uuid, varchar } from "drizzle-orm/pg-core";

// Users table
export const users = pgTable(
    "users",
    {
        id: uuid().primaryKey().defaultRandom(),
        name: varchar("name", { length: 255 }).notNull(),
        email: varchar("email", { length: 255 }).notNull(),
        password: varchar("password", { length: 255 }).notNull(),
        createdAt: timestamp("createdAt", { withTimezone: true }).defaultNow(),
    },
    (table) => [unique("users_email_unique").on(table.email)],
);

// Complaints table
export const complaints = pgTable("complaints", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 20 }).notNull(),
    date: varchar("date", { length: 100 }).notNull(),
    personComplainedAgainst: varchar("person_complained_against", {
        length: 255,
    }).notNull(),
    incidentDescription: text("incident_description").notNull(),
    expectedResolution: text("expected_resolution").notNull(),
    createdAt: timestamp("createdAt", { withTimezone: true }).defaultNow(),
});

// Contacts table
export const contacts = pgTable("contacts", {
    id: uuid().primaryKey().defaultRandom(),
    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("createdAt", { withTimezone: true }).defaultNow(),
});
