import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    (console.log('passou aqui'));
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "share_prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('ver aqui');
        isConnected = true;
        console.log('MongoDB connected');
    } catch(error) {
        console.log(error);
    }
}