import mongoose from "mongoose"
const connectDb = async () => {
    const MONGODB_URL=process.env.MONGODB_URL!
    if(!MONGODB_URL){
        return console.log("No Mongodb Url");
        
    }
    try {
        if (mongoose.connection.readyState! === 1) {
            await mongoose.connect(MONGODB_URL,{
               dbName:"e-commerce",
            });
            console.log('MongoDB connected');
        }
    } catch (error) {
        console.log(error, 'mongodb error');

    }
}
export default connectDb