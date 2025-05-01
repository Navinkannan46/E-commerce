import mongoose from "mongoose"
const connectDb = async () => {
    const MONGODB_URL=process.env.MONGODB_URL!
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(MONGODB_URL);
            console.log('MongoDB connected');
        }
    } catch (error) {
        console.log(error, 'mongodb error');

    }
}
export default connectDb