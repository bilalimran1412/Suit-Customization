import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const authClient = new MongoClient(
	"mongodb+srv://challchutikrputtar:j9lLI5tEdVhBhRDQ@abdullah.sanl4.mongodb.net/suitedb?retryWrites=true&w=majority",
);

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
