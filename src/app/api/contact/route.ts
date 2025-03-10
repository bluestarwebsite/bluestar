import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { contacts } from "@/server/db/schema";
import { db } from "@/server/db";
interface ContactFormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const { fname, lname, email, phone, message } =
    (await req.json()) as ContactFormData;

  await db.insert(contacts).values({ fname, lname, email, phone, message });

  console.log("Received data:", { fname, lname, email, phone, message });

  return NextResponse.json({ message: "Data received successfully" });
}
