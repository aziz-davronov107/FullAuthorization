import mongoose from "mongoose";

export async function connectDB() {
    try {

        let connectDB  = await mongoose.connect(process.env.CONNECT);
        console.log("DB ishladi");
        return connectDB;

    } catch (error) {
        console.error(error);
    }
}