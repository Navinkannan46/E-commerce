'use server'
import User from "@/model/user";
import connectDb from "../db";
type createDate = {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
}
export const createOrUpdate = async ({ id, email, first_name, last_name }: createDate) => {
    try {
        await connectDb()
        const users = {
            clerkId: id,
            name: `${first_name} ${last_name}`,
            email: email,
        }
        await User.create(users)
        return users
    } catch (error) {
        console.error("Error in createOrUpdate:", error);
        throw error;
    }
}