CREATE TABLE IF NOT EXISTS "bluestar_contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"fname" varchar(256),
	"lname" varchar(256),
	"phone" varchar(256),
	"email" varchar(256),
	"message" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
