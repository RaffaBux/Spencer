import mongoose from "mongoose";

export async function connectDatabase(uri: string) {
  mongoose.set("strictQuery", true);

  await mongoose.connect(uri);

  console.log("✅ MongoDB connected");
}