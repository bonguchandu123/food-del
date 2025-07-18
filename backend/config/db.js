import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aravindj1350:chandu123@cluster0.wyyii.mongodb.net/food-del').then(() => console.log('DB connected'));
}
