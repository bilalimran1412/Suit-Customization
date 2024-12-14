import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const authClient = new MongoClient(process.env.DATABASE_URL);

const db = authClient.db();
export const auth = betterAuth({
	trustedOrigins: ["http://localhost:3001"],
	database: mongodbAdapter(db),
	secret: process.env.BETTER_AUTH_SECRET,
	emailAndPassword: {
		enabled: true,
		maxPasswordLength: 14,
		minPasswordLength: 8,
	},
});
