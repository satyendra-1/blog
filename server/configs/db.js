import mongoose from "mongoose";
const  connectDB= async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
   
  }
};

export default connectDB;
