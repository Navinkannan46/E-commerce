import mongoose, { Schema } from "mongoose";
type schemas = {
    clerkId: string;
    name: string;
    email: string;
  

}
const userSchema = new Schema<schemas>({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

}, { timestamps: true })
const User = mongoose.models.User || mongoose.model<schemas>("User", userSchema)
export default User