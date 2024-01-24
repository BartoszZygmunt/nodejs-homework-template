import mongoose from "mongoose";

const { DATABASE_URL: uriDB } = process.env;

const connection = mongoose.connect(uriDB);

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
