"use server"
import connectDb from "@/lib/db";
import User from "@/model/user";

type userDetails = {
    clerkId: string;
    email: string;
    name: string;
}
export const createUser = async (data: userDetails) => {
    await connectDb()
    try {
        const existingUser = await User.findOne({ clerkId: data.clerkId });
        if (existingUser) {
            console.log("User already exists");
            return;
        }

        await User.create(data);
        console.log("User created:", data.email);
        
    } catch (error) {
        console.log(error);

    }

}