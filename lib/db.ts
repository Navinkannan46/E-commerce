import mongoose from "mongoose"
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        console.log("connected");
    } catch (error) {
        console.log(error, 'mongodb error');

    }
}
export default connectDb