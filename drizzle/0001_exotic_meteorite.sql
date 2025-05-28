ALTER TABLE "_prisma_migrations" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "_prisma_migrations" CASCADE;--> statement-breakpoint
DROP INDEX "users_email_key";--> statement-breakpoint
ALTER TABLE "contacts" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "contacts" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "contacts" ALTER COLUMN "email" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "contacts" ALTER COLUMN "createdAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "contacts" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "contacts" ALTER COLUMN "createdAt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "complaints" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "complaints" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "complaints" ALTER COLUMN "name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "complaints" ALTER COLUMN "phone" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "complaints" ALTER COLUMN "date" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "complaints" ALTER COLUMN "createdAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "complaints" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "complaints" ALTER COLUMN "createdAt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "createdAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "createdAt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "first_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "contacts" ADD COLUMN "last_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "complaints" ADD COLUMN "person_complained_against" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "complaints" ADD COLUMN "incident_description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "complaints" ADD COLUMN "expected_resolution" text NOT NULL;--> statement-breakpoint
ALTER TABLE "contacts" DROP COLUMN "firstName";--> statement-breakpoint
ALTER TABLE "contacts" DROP COLUMN "lastName";--> statement-breakpoint
ALTER TABLE "complaints" DROP COLUMN "personComplainedAgainst";--> statement-breakpoint
ALTER TABLE "complaints" DROP COLUMN "incidentDescription";--> statement-breakpoint
ALTER TABLE "complaints" DROP COLUMN "expectedResolution";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");