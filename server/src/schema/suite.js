import mongoose from "mongoose";
const SuiteSchema = new mongoose.Schema({
	febricaSelection: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	style: {
		type: String,
		required: true,
	},
	Mixmatchfabrics: {
		type: String,
		required: true,
	},
	lapelStyle: {
		type: String,
		required: true,
	},
	j17lapelWidth: {
		type: String,
		required: true,
	},
	pocketStyle: {
		type: String,
		required: true,
	},
	j25insidePockets: {
		type: String,
	},
	lapelbuttonwholecolor: {
		type: String,
	},
	positionOfbuttons: {
		type: String,
	},
	sleeveButtonholes: {
		type: String,
	},
	sleeveButtonPositions: {
		type: String,
	},
	typesOfTheStitching: {
		type: String,
	},
	elbowPatches: {
		type: String,
	},
	Embroideryposition: {
		type: String,
	},
	pocketEnvelopeFlapPosition: {
		type: String,
	},
	Outsidedecorativestitchingtype: {
		type: String,
	},
	PocketEnvelopeFlapPosition: {
		type: String,
	},
	Outsidedecorativestitchingedge: {
		type: String,
	},
	InsidePocketswithzipper: {
		type: String,
	},
	InsidePocketJettsBartackType: {
		type: String,
	},
	InsidePocketJettsBartackColour: {
		type: String,
	},
	InsidePocketEnvelopeFlapClosure: {
		type: String,
	},
	ColumbiaInsideDecorativeStitching: {
		type: String,
	},
	SweatPiece: {
		type: String,
	},
	PositionOfLabels: {
		type: String,
	},
	StitchingLabelColor: {
		type: String,
	},
	quantity: {
		type: Number,
		default: 1,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

const Suite = mongoose.model("Suite", SuiteSchema);

export default Suite;
