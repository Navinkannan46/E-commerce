import mongoose, { Schema, model, Model } from "mongoose";

interface UserSchema {
  _id: string;
  name: string;
  email: string;
}

const userSchema = new Schema<UserSchema>(
  {
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const User: Model<UserSchema> = mongoose.models.User || model<UserSchema>("User", userSchema);
export default User;