import mongoose from "mongoose";

let isConnected = false; // To track the MongoDB connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("-----****MongoDB is already connected!!****--------");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("----------****MongoDB is connected!!****-----------");
  } catch (error) {
    console.error("-------****Error connecting to MongoDB****-------", error);
    throw new Error("Database connection failed");
  }
};
