import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
	console.log("DATABASE_URL is not set" , process.env.DATABASE_URL);
	throw new Error("DATABASE_URL is not set");
}

const MONGODB_URI = process.env.DATABASE_URL;

// Create and connect MongoDB client
export const connectMongo = async () => {
	try {
		// Connect MongoClient
		const client = new MongoClient(MONGODB_URI);
		await client.connect();

		// Connect Mongoose
		await mongoose.connect(MONGODB_URI);

		console.log("MongoDB Connected Successfully");

		// Return connected client for adapter
		return client.db();
	} catch (error) {
		console.error("MongoDB Connection Error:", error);
		throw error;
	}
};
