import mongoose, { Schema } from "mongoose";
type schemas = {
    clerkId: string;
    name: string;
    email: string;
    password?: string;
    phone?: number;
    isBlocked?: boolean;
    isAdmin?: boolean;
    cart?: string[];
    wishlist?: string[];
    orderHistory?: string[];
    createdAt?: Date;

}
const userSchema = new Schema<schemas>({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    phone: { type: Number, required: false, default: null },
    isBlocked: { type: Boolean },
    isAdmin: { type: Boolean },
    cart: [{ type: Schema.Types.ObjectId, ref: "Cart", default: [] }],
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Wishlist", default: [] }],
    orderHistory: [{ type: Schema.Types.ObjectId, ref: "Order", default: [] }],
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true })
const User = mongoose.models.User || mongoose.model<schemas>("User", userSchema)
export default User