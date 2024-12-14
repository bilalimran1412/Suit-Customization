import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth.js";

export const userMiddleware = async (req, res, next) => {
	try {
		const session = await auth.api.getSession({
			headers: fromNodeHeaders(req.headers),
		});

		if (!session.user) {
			return res.status(401).json({ message: "User is not authenticated" });
		}

		req.user = session.user;
		next();
	} catch (error) {
		console.error("Authentication error:", error);
		return res.status(500).json({ message: "Authentication failed" });
	}
};

export default userMiddleware;
