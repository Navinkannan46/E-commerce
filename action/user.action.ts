"use server"
import connectDb from "@/lib/db";
import User from "@/model/user";

type userDetails = {
    clerkId: string;
    email: string;
    name: string;
}
export const createUser = async (data: userDetails) => {
    console.log("Connecting to DB...");
    await connectDb();
    try {
        console.log("Checking if user exists...");
        const existingUser = await User.findOne({ clerkId: data.clerkId });
        if (existingUser) {
            console.log("User already exists:", existingUser.email);
            return;
        }

        console.log("Creating user in DB...");
        await User.create(data);
        console.log("User created:", data.email);

    } catch (error) {
        console.log("Error creating user:", error);
    }
}