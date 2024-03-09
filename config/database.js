import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  // operation perform only , when its in db
  mongoose.set("strictQuery", true);

  // Already connect , then dont connect again
  if (connected) {
    console.log("Database is Already Connected !");
  }

  // Connection
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    connected = true;
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
