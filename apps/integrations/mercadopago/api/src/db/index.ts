import mongoose from "mongoose";
import { config } from "../config";

async function dbConnection() {
  await mongoose.connect(config.mongodbUri as string);
  console.log("[mongodb]: connection succesfull");
}

export { dbConnection };
