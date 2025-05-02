import { NextResponse } from "next/server";
import { createUser } from "@/action/user.action";

export async function GET() {
  await createUser({
    clerkId: "test123",
    email: "test@example.com",
    name: "Test User"
  });

  return NextResponse.json({ message: "Test user created" });
}