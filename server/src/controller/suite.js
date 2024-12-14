import Suite from "../schema/suite.js";
import mongoose from "mongoose";
import User from "../schema/userModel.js";

export async function createSuite(req, res) {
	try {
		const { selectedItems } = req.body;
		const userId = req.user.id;

		//need to fetch user data 

		if (!userId) {
			return res.status(400).json({ message: "User not found" });
		}

		// Create suites for each selected item
		const suites = selectedItems.map((item) => ({
			id: item.id,
			febricaSelection: item.febricaSelection,
			price: item.price,
			style: item.style,
			Mixmatchfabrics: item.Mixmatchfabrics,
			lapelStyle: item.lapelStyle,
			j17lapelWidth: item.lapelWidth,
			pocketStyle: item.pocketStyle,
			j25insidePockets: item.insidePockets,
			sleeveButtonholes: item.sleeveButtonholes,
			sleeveButtonPositions: item.sleeveButtonPositions,
			lapelbuttonwholecolor: item.lapelbuttonwholecolor,
			positionOfbuttons: item.positionOfbuttons,
			typesOfTheStitching: item.typesOfTheStitching,
			elbowPatches: item.elbowPatches,
			Embroideryposition: item.Embroideryposition,
			pocketEnvelopeFlapPosition: item.pocketEnvelopeFlapPosition,
			Outsidedecorativestitchingtype: item.outsidedecorativestitchingtype,
			Outsidedecorativestitchingedge: item.outsidedecorativestitchingedge,
			InsidePocketswithzipper: item.insidePocketswithzipper,
			InsidePocketJettsBartackType: item.insidePocketJettsBartackType,
			InsidePocketJettsBartackColour: item.insidePocketJettsBartackColour,
			InsidePocketEnvelopeFlapClosure: item.insidePocketEnvelopeFlapClosure,
			ColumbiaInsideDecorativeStitching: item.columbiaInsideDecorativeStitching,
			SweatPiece: item.sweatPiece,
			PositionOfLabels: item.positionOfLabels,
			StitchingLabelColor: item.stitchingLabelColour,
			quantity: item.quantity,
			user: userId,
		}));

		// Save multiple suites in one operation
		const newSuites = await Suite.insertMany(suites);

		res.status(201).json(newSuites);
	} catch (err) {
		console.error("Error creating suites:", err);
		res.status(500).json({
			message: "Error creating suites",
			error: err.message,
		});
	}
}

export async function getSuitesByUser(req, res) {
	try {
		const userId = req.user.id;
		const suites = await Suite.find({ user: userId });
		res.status(200).json(suites);
	} catch (err) {
		console.error("Error getting suites:", err);
		res.status(500).json({
			message: "Error getting suites",
			error: err.message,
		});
	}
}
