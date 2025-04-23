import connectDb from "@/lib/db";
import User from "@/model/user";
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";

connectDb()
type datas = {
    email: string;
    password: string;
}
export async function POST(request: NextRequest) {
    try {
        const { email, password }: datas = await request.json()
        console.log(email,password);
        
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return NextResponse.json({ message: "Please Register with email." },
                { status: 400 })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if (!matchPassword) {
            return NextResponse.json({ message: "Invalid Credential" }, { status: 400 })
        }

        return NextResponse.json({ message: "Login success" }, { status: 200 })


    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json(
            { message: "Login failed. Please try again later." },
            { status: 500 }
        );
    }

}