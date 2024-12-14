import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
	expiresAt: { type: Date, required: true },
	token: { type: String, unique: true, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	ipAddress: String,
	userAgent: String,
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, onDelete: "CASCADE" },
});

const Session = mongoose.model("Session", sessionSchema);
export default Session;
