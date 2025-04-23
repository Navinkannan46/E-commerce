import connectDb from "@/lib/db";
import User from "@/model/user";
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";

connectDb()
type datas = {
    name: string;
    email: string;
    password: string;
}
export async function POST(request: NextRequest) {
    try {
        const { name, email, password }: datas = await request.json()
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return NextResponse.json({ message: "Email already exists. Please try another email." },
                { status: 400 })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name, email, password: hashPassword
        })
        await newUser.save()
        return NextResponse.json({ message: "Registration success" }, { status: 201 })


    } catch (error) {
        console.error("Register Error:", error);
        return NextResponse.json(
            { message: "Registration failed. Please try again later." },
            { status: 500 }
        );
    }

}