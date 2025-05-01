import mongoose, { Schema } from "mongoose";
type schemas = {
    clerkId: string;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    isBlocked: boolean;
    isAdmin: boolean;
    cart: string[];
    whislist: string[];
    orderHistory: string[];
    createdAt: Date;

}
const userSchema = new Schema<schemas>({
    clerkId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    phone: { type: Number, required: false, default: null },
    isBlocked: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    cart: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
    whislist: [{ type: Schema.Types.ObjectId, ref: "Whislist" }],
    orderHistory: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    createdAt: { type: Date, default: Date.now },
})
const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User