"use server";
import User from "@/model/user";
import connectDb from "../db";

interface UserData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

export const createOrUpdate = async ({ id, email, first_name, last_name }: UserData) => {
  try {
    await connectDb();

    const userData = {
      clerkId: id,
      name: `${first_name} ${last_name}`.trim(),
      email,
    };

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      { $set: userData },
      { upsert: true, new: true }
    );

    return user;
  } catch (error: any) {
    if (error.code === 11000) {
      console.error("Duplicate key error:", error);
      throw new Error("User with this email or clerkId already exists");
    }
    console.error("Error in createOrUpdate:", error);
    throw error;
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    await connectDb();
    await User.deleteOne({ clerkId });
    return { message: "User deleted successfully" };
  } catch (error) {
    console.error("Error in deleteUser:", error);
    throw error;
  }
};