import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectMongo } from "./lib/database/db.js";
import AuthRouter from "./routes/auth.route.js";
import suiteRouter from "../src/routes/suite.route.js";

// Configure environment variables
dotenv.config();

const app = express();
const port = 3000;

app.use(
	cors({
		origin: "http://localhost:3001",
		credentials: true,
	}),
);

app.get("/test", (req, res) => {
	res.send("Hello World!");
});

connectMongo();

app.use(AuthRouter);

app.use("/api", suiteRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
