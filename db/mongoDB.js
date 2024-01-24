import mongoose from "mongoose";

const { DATABASE_URL: uriDBpath } = process.env;

const connection = mongoose.connect(uriDBpath);

export const connectToMongoDB = async () => {
  try {
    await connection;
    console.log("Database connection successful");
  } catch (err) {
    console.log("Database connection failed :(");
    console.error(err);
    process.exit(1);
  }
};
