import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
  const MONGODB_URL = process.env.MONGODB_URL;
  if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined in environment variables");
  }

  try {
    await mongoose.connect(MONGODB_URL, { dbName: "e-commerce" });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDb;