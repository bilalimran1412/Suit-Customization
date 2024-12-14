import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI =
	"mongodb+srv://challchutikrputtar:j9lLI5tEdVhBhRDQ@abdullah.sanl4.mongodb.net/suitedb?retryWrites=true&w=majority";

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
