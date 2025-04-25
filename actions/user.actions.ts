import connectDb from "@/lib/db";
import User from "@/model/user";

export const createUser = async (user: any) => {
    try {
        await connectDb()
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error);

    }

}