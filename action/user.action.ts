import connectDb from "@/lib/db";
import User from "@/model/user";

type userDetails = {
    clerkId: string;
    email: string;
    name: string;
}
export const createUser = async (data: userDetails) => {
    await connectDb
    try {
        await User.create(data)
    } catch (error) {
        console.log(error);

    }

}