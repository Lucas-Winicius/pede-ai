CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "images" (
	"id" char(12) PRIMARY KEY NOT NULL,
	"filename" varchar NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" char(12) PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" text,
	"price" real NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" char(12) PRIMARY KEY NOT NULL,
	"role" "role",
	"username" varchar NOT NULL,
	"email" varchar,
	"password" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
