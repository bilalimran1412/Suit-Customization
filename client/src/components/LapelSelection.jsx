import React, { useState, useEffect } from "react";
import "../css/style_sidebar.css";
import { useId } from "react";
import { useSelectedData } from "../context/SelectedData";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

const JacketOptions = ({
	onSelectColumbiaInsideDecorativeStitching,
	onSelectSweatPiece,
	onSelectPositionOfLabels,
	onSelectStitchingLabelColor,
	onSelectCustomerLabelTypeStitching,
	onSelectButtonholesOnSleeves,
	onSelectedInsidePocketEnvelopeFlapClosure,
	onSelectedInsidePocketJettsBartackColour,
	onSelectedInsidePocketJettsBartackType,
	onSelectetInsidePocketswithzipper,
	onSelectOutsidedecorativestitchingedge,
	onSelectOutsidedecorativestitchingposition,
	onSelectLapelbuttonwholecolor,
	onSelectStyle,
	onselectPositionOfTheButtons,
	onSelectFit,
	onSelectLapel,
	onSelectOutsidedecorativestitchingtype,
	onSelectLapelWidth,
	selectedFebric,
	price,
	onSelectPockets,
	onSelectSleeveButtons,
	onSelectPleats,
	onSelectElbowPatches,
	onSelectTypesOfTheStitching,
	onSelectActiveWaist,
	onSelectSleeveButtonholesVariant,
	onSelectInsidePockets,
	onSelectPocketEnvelopeFlapPosition,
	onSelectInsidePocketsSleveButtonPosition,
	onSelectEmbroidery,
	onSelectVest,
	className,
}) => {
	const [selectedStyle, setSelectedStyle] = useState("Single-breasted 1 button");
	const [base, setBase] = useState("base");
	const [selectedFit, setSelectedFit] = useState("Same Fabric");
	const [selectedLapel, setSelectedLapel] = useState("Notch");
	const [selectedLapelWidth, setSelectedLapelWidth] = useState("Slim");
	const [selectedPockets, setSelectedPockets] = useState("With Flap");
	const [selectedInsidePockets, setSelectedInsidePockets] = useState("Two inside pockets + one pen pocket");
	const [selectedEmbroidery, setSelectedEmbroidery] = useState("Without Embroidery");
	const [selectedInsideSleeveButtonholesVariant, setSelectedInsideSleeveButtonholesVariant] =
		useState("In tone with the main fabric");
	const [selectedTypesOfTheStitching, setSelectedTypesOfTheStitching] = useState("Standard Stitching");
	const [selectedInsideSleeveButtonPosition, setSelectedInsideSleeveButtonPosition] =
		useState("All buttons same colour");
	const [selectedElbowPatches, setSelectedElbowPatches] = useState("Without Patch");
	const [SelectedPocketEnvelopeFlapPosition, setSelectedPocketEnvelopeFlapPosition] = useState("Without Envelope Flap");
	const [selectedSleeveButtons, setSelectedSleeveButtons] = useState(null);
	const [selectedPositionOfTheButtons, setSelectedPositionOfTheButtons] = useState("Standard Position");
	const [selectedPleats, setSelectedPleats] = useState("No Pleats");
	const [selectedActiveWaist, setSelectedActiveWaist] = useState(null);
	const [selectedVest, setSelectedVest] = useState(null);
	const [selectedLapelbuttonwholecolor, setSelectedLapelbuttonwholecolor] = useState("In tone with fabric");
	const [selectedOutsidedecorativestitchingtype, setSelectedOutsidedecorativestitchingtype] = useState("AMF");
	const [selectedOutsidedecorativestitchingposition, setSelectedOutsidedecorativestitchingposition] =
		useState("Without Decorative Stitching");
	const [selectedOutsidedecorativestitchingedge, setSelectedOutsidedecorativestitchingedge] = useState("AMF 2мм");
	const [selectedInsidePocketswithzipper, setSelectedInsidePocketswithzipper] = useState(
		"Without zipper on the pockets",
	);
	const [selectedInsidePocketJettsBartackType, setSelectedInsidePocketJettsBartackType] = useState("Without bartack");
	const [selectedInsidePocketJettsBartackColour, setSelectedInsidePocketJettsBartackColour] =
		useState("In tone with lining");
	const [selectedInsidePocketEnvelopeFlapClosure, setSelectedInsidePocketEnvelopeFlapClosure] =
		useState("Button Hole Envelop");

	// Columbia Inside Decorative Stitching
	const [selectedColumbiaInsideDecorativeStitching, setSelectedColumbiaInsideDecorativeStitching] =
		useState("Without Columbia");

	// Sweat Piece
	const [selectedSweatPiece, setSelectedSweatPiece] = useState("Without sweat piece");

	// Position of Labels
	const [selectedPositionOfLabels, setSelectedPositionOfLabels] = useState("Mill Label №2 under pen pocket");

	// Stitching Label Color
	const [selectedStitchingLabelColor, setSelectedStitchingLabelColor] = useState("In tone with the label");

	// Customer Label Type Stitching
	const [selectedCustomerLabelTypeStitching, setSelectedCustomerLabelTypeStitching] = useState("Straight Stitching");

	// Buttonholes on Sleeves
	const [selectedButtonholesOnSleeves, setSelectedButtonholesOnSleeves] = useState(
		"Non functional buttonholes on sleeves",
	);

	const [embroideryThread, setEmbroideryThread] = useState("Without Embroidery");
	const [embroideryThreadColor, setEmbroideryThreadColor] = useState("");

	const { handleSelectData } = useSelectedData();

	const id = useId();

	const [isThreadDialogOpen, setIsThreadDialogOpen] = useState(false);

	// Add handler function

	const styleOptions = [
		{
			label: "Single-breasted 1 button",
			iconClass: "icon_3e",
			onClick: () => {
				onSelectStyle("Single-breasted 1 button");
				setSelectedStyle("Single-breasted 1 button");
			},
		},
		{
			label: "Single-breasted 2 buttons",
			iconClass: "icon_3f",
			onClick: () => {
				onSelectStyle("Single-breasted 2 buttons");
				setSelectedStyle("Single-breasted 2 buttons");
			},
		},
		{
			label: "Double-breasted 3 buttons",
			iconClass: "icon_60",
			onClick: () => {
				onSelectStyle("Double-breasted 3 buttons");
				setSelectedStyle("Double-breasted 3 buttons");
			},
		},
		{
			label: "Double-breasted 4 buttons",
			iconClass: "icon_5f",
			onClick: () => {
				onSelectStyle("Double-breasted 4 buttons");
				setSelectedStyle("Double-breasted 4 buttons");
			},
		},
	];

	const fitOptions = [
		{
			label: "Same Fabric",
			imgSrc: "https://d1fufvy4xao6k9.cloudfront.net/images/personalize/multifabric/man/no_multifabric.svg",
			onClick: () => {
				onSelectFit("Same Fabric");
				setSelectedFit("Same Fabric");
			},
		},
		{
			label: "Different Fabrics",
			imgSrc: "https://d1fufvy4xao6k9.cloudfront.net/images/personalize/multifabric/man/multifabric.svg",
			onClick: () => {
				onSelectFit("Different Fabrics");
				setSelectedFit("Different Fabrics");
			},
		},
	];

	const lapelOptions = [
		{
			label: "Notch",
			iconClass: "icon_63",
			onClick: () => {
				onSelectLapel("Notch");
				setSelectedLapel("Notch");
			},
		},
		{
			label: "Peak",
			iconClass: "icon_64",
			onClick: () => {
				onSelectLapel("Peak");
				setSelectedLapel("Peak");
			},
		},
	];

	const lapelStyleWidth = [
		{
			label: "6cm",
			iconClass: "icon_4f",
			onClick: () => {
				onSelectLapelWidth("6cm");
				setSelectedLapelWidth("6cm");
			},
		},
		{
			label: "7cm",
			iconClass: "icon_63",
			onClick: () => {
				onSelectLapelWidth("7cm");
				setSelectedLapelWidth("7cm");
			},
		},
		{
			label: "8cm",
			iconClass: "icon_50",
			onClick: () => {
				onSelectLapelWidth("8cm");
				setSelectedLapelWidth("8cm");
			},
		},
		{
			label: "9cm",
			iconClass: "icon_50",
			onClick: () => {
				onSelectLapelWidth("9cm");
				setSelectedLapelWidth("9cm");
			},
		},
		{
			label: "10cm",
			iconClass: "icon_50",
			onClick: () => {
				onSelectLapelWidth("10cm");
				setSelectedLapelWidth("10cm");
			},
		},
		{
			label: "11cm",
			iconClass: "icon_50",
			onClick: () => {
				onSelectLapelWidth("11cm");
				setSelectedLapelWidth("11cm");
			},
		},
		{
			label: "12cm",
			iconClass: "icon_50",
			onClick: () => {
				onSelectLapelWidth("12cm");
				setSelectedLapelWidth("12cm");
			},
		},
	];

	const pocketOptions = [
		{
			label: "With Flap",
			iconClass: "icon_22",
			onClick: () => {
				onSelectPockets("With Flap");
				setSelectedPockets("With Flap");
			},
		},
		{
			label: "Double-welted",
			iconClass: "icon_23",
			onClick: () => {
				onSelectPockets("Double-welted");
				setSelectedPockets("Double-welted");
			},
		},
		{
			label: "Patched",
			iconClass: "icon_6e",
			onClick: () => {
				onSelectPockets("Patched");
				setSelectedPockets("Patched");
			},
		},
		{
			label: "With flap x3",
			iconClass: "icon_22",
			onClick: () => {
				onSelectPockets("With flap x3");
				setSelectedPockets("With flap x3");
			},
		},
		{
			label: "Double-welted x3",
			iconClass: "icon_23",
			onClick: () => {
				onSelectPockets("Double-welted x3");
				setSelectedPockets("Double-welted x3");
			},
		},
	];

	const insidepocketOptions = [
		{
			label: "Two inside pockets + one pen pocket",
			iconClass: "bg_images_icons pocket_one_by_one",
			onClick: () => {
				onSelectInsidePockets("Two inside pockets + one pen pocket");
				setSelectedInsidePockets("Two inside pockets + one pen pocket");
			},
		},
		{
			label: "Two inside pockets+pen pocket+ticket pocket on the left",
			iconClass: "bg_images_icons pocket_on_the_left",
			onClick: () => {
				onSelectInsidePockets("Two inside pockets+pen pocket+ticket pocket on the left");
				setSelectedInsidePockets("Two inside pockets+pen pocket+ticket pocket on the left");
			},
		},
		{
			label: "Two inside pockets +pen pocket+ticket pocket on the right",
			iconClass: "bg_images_icons pocket_on_the_ticket",
			onClick: () => {
				onSelectInsidePockets("Two inside pockets +pen pocket+ticket pocket on the right");
				setSelectedInsidePockets("Two inside pockets +pen pocket+ticket pocket on the right");
			},
		},
		{
			label: "Two inside pockets +pen pocket on the left+pen pocket on the right",
			iconClass: "bg_images_icons pocket_on_the_left_pocket",
			onClick: () => {
				onSelectInsidePockets("Two inside pockets +pen pocket on the left+pen pocket on the right");
				setSelectedInsidePockets("Two inside pockets +pen pocket on the left+pen pocket on the right");
			},
		},
	];

	const insideembroideryOptions = [
		{
			label: "Without Embroidery",
			iconClass: "bg_images_icons embionry_position",
			onClick: () => {
				onSelectEmbroidery("Without Embroidery");
				setSelectedEmbroidery("Without Embroidery");
			},
		},
		{
			label: "Two Letters on upper left pocket",
			iconClass: "bg_images_icons embionry_position_1",
			onClick: () => {
				onSelectEmbroidery("Two Letters on upper left pocket");
				setSelectedEmbroidery("Two Letters on upper left pocket");
			},
		},
		{
			label: "Three to ten letters on the above the upper left pocket",
			iconClass: "bg_images_icons embionry_position_2",
			onClick: () => {
				onSelectEmbroidery("Three to ten letters on the above the upper left pocket");
				setSelectedEmbroidery("Three to ten letters on the above the upper left pocket");
			},
		},
		{
			label: "1-2 letters on sleeve vent",
			iconClass: "bg_images_icons embionry_position_3",
			onClick: () => {
				onSelectEmbroidery("1-2 letters on sleeve vent");
				setSelectedEmbroidery("1-2 letters on sleeve vent");
			},
		},
		{
			label: "Embroidery on melton – 2 letters",
			iconClass: "bg_images_icons embionry_position_4",
			onClick: () => {
				onSelectEmbroidery("Embroidery on melton – 2 letters");
				setSelectedEmbroidery("Embroidery on melton – 2 letters");
			},
		},
		{
			label: "Embroidery on melton - 3–10 letters",
			iconClass: "bg_images_icons embionry_position_5",
			onClick: () => {
				onSelectEmbroidery("Embroidery on melton - 3–10 letters");
				setSelectedEmbroidery("Embroidery on melton - 3–10 letters");
			},
		},
		{
			label: "Three to ten letters on the above the upper left pocket - two rows",
			iconClass: "bg_images_icons embionry_position_6",
			onClick: () => {
				onSelectEmbroidery("Three to ten letters on the above the upper left pocket - two rows");
				setSelectedEmbroidery("Three to ten letters on the above the upper left pocket - two rows");
			},
		},
		{
			label: "Three to ten letters on the above the upper left pocket - three rows",
			iconClass: "bg_images_icons embionry_position_7",
			onClick: () => {
				onSelectEmbroidery("Three to ten letters on the above the upper left pocket - three rows");
				setSelectedEmbroidery("Three to ten letters on the above the upper left pocket - three rows");
			},
		},
	];

	const SleeveButtonholesVariants = [
		{
			label: "In tone with the main fabric",
			iconClass: "bg_images_icons pocket_one_by_one",
			onClick: () => {
				onSelectSleeveButtonholesVariant("In tone with the main fabric");
				setSelectedInsideSleeveButtonholesVariant("In tone with the main fabric");
			},
		},
		{
			label: "All buttonholes in contrast",
			iconClass: "bg_images_icons pocket_on_the_left",
			onClick: () => {
				onSelectSleeveButtonholesVariant("All buttonholes in contrast");
				setSelectedInsideSleeveButtonholesVariant("All buttonholes in contrast");
			},
		},
		{
			label: "First Buttonhole in contrast",
			iconClass: "bg_images_icons pocket_on_the_ticket",
			onClick: () => {
				onSelectSleeveButtonholesVariant("First Buttonhole in contrast");
				setSelectedInsideSleeveButtonholesVariant("First Buttonhole in contrast");
			},
		},
		{
			label: "Last Buttonhole in contrast",
			iconClass: "bg_images_icons pocket_on_the_left_pocket",
			onClick: () => {
				onSelectSleeveButtonholesVariant("Last Buttonhole in contrast");
				setSelectedInsideSleeveButtonholesVariant("Last Buttonhole in contrast");
			},
		},
	];

	const SleeveButtonholesPosition = [
		{
			label: "All buttons same colour",
			iconClass: "bg_images_icons sleeve_whole_positions",
			onClick: () => {
				onSelectInsidePocketsSleveButtonPosition("All buttons same colour");
				setSelectedInsideSleeveButtonPosition("All buttons same colour");
			},
		},
		{
			label: "First Button in contrast",
			iconClass: "bg_images_icons sleeve_whole_positions_1",
			onClick: () => {
				onSelectInsidePocketsSleveButtonPosition("First Button in contrast");
				setSelectedInsideSleeveButtonPosition("First Button in contrast");
			},
		},
		{
			label: "Last Buttons in contrast",
			iconClass: "bg_images_icons sleeve_whole_positions_2",
			onClick: () => {
				onSelectInsidePocketsSleveButtonPosition("Last Buttons in contrast");
				setSelectedInsideSleeveButtonPosition("Last Buttons in contrast");
			},
		},
		{
			label: "All Buttons in contrast",
			iconClass: "bg_images_icons sleeve_whole_positions_3",
			onClick: () => {
				onSelectInsidePocketsSleveButtonPosition("All Buttons in contrast");
				setSelectedInsideSleeveButtonPosition("All Buttons in contrast");
			},
		},
	];

	const SleeveButtonStichingtype = [
		{
			label: "Standard Stitching",
			iconClass: "bg_images_icons sleeve_whole_stiching_type",
			onClick: () => {
				onSelectTypesOfTheStitching("Standard Stitching");
				setSelectedTypesOfTheStitching("Standard Stitching");
			},
		},
		{
			label: "N – stitching",
			iconClass: "bg_images_icons sleeve_whole_stiching_type_1",
			onClick: () => {
				onSelectTypesOfTheStitching("N – stitching");
				setSelectedTypesOfTheStitching("N – stitching");
			},
		},
		{
			label: "Cross Stitching",
			iconClass: "bg_images_icons sleeve_whole_stiching_type_2",
			onClick: () => {
				onSelectTypesOfTheStitching("Cross Stitching");
				setSelectedTypesOfTheStitching("Cross Stitching");
			},
		},
		{
			label: "Arrow Stitching",
			iconClass: "bg_images_icons sleeve_whole_stiching_type_3",
			onClick: () => {
				onSelectTypesOfTheStitching("Arrow Stitching");
				setSelectedTypesOfTheStitching("Arrow Stitching");
			},
		},
	];

	const ElbowPatchesVariant = [
		{
			label: "Without Patch",
			iconClass: "bg_images_icons elbowpatchesvariant",
			onClick: () => {
				onSelectElbowPatches("Without Patch");
				setSelectedElbowPatches("Without Patch");
			},
		},
		{
			label: "Patch on the sleeve",
			iconClass: "bg_images_icons elbowpatchesvariant_1",
			onClick: () => {
				onSelectElbowPatches("Patch on the sleeve");
				setSelectedElbowPatches("Patch on the sleeve");
			},
		},
	];

	const a = [
		{
			label: "",
			iconClass: "bg_images_icons elbowpatchesvariant",
			onClick: () => {
				onSelectPockets("");
				setSelectedPockets("");
			},
		},
	];
	const embroideryThreadOptions = [
		{
			label: "Select Embroidery Thread",
			iconClass: "bg_images_icons embroidery_thread",
			onClick: () => {
				setEmbroideryThread("Select Embroidery Thread"); // Set the embroideryThread state
				setIsThreadDialogOpen(true);
			},
		},
		{
			label: "Without Embroidery",
			iconClass: "bg_images_icons without_embroidery",
			onClick: () => {
				setEmbroideryThread("Without Embroidery"); // Setnt the embroideryThread state
				setEmbroideryThreadColor(""); // Set the embroideryThreadColor state to null
			},
		},
	];

	const FrontendOptionsMap = [
		{
			title: "Style",
			options: styleOptions,
			selectedOption: selectedStyle,
			setSelectedOption: setSelectedStyle,
			className: "styled_option grid_layout",
		},
		{
			title: "position",
			options: fitOptions,
			selectedOption: selectedFit,
			setSelectedOption: setSelectedFit,
			className: "fabrics_option grid_layout",
		},
		{
			title: "Lapel Style",
			options: lapelOptions,
			selectedOption: selectedLapel,
			setSelectedOption: setSelectedLapel,
			className: "lapel_option grid_layout",
		},
		{
			title: "Lapel Width",
			options: lapelStyleWidth,
			selectedOption: selectedLapelWidth,
			setSelectedOption: setSelectedLapelWidth,
			className: "lapel_option grid_layout",
		},
		{
			title: "Pocket Style",
			options: pocketOptions,
			selectedOption: selectedPockets,
			setSelectedOption: setSelectedPockets,
			className: "pocket_option grid_layout",
		},
		{
			title: "Inside Pockets – Variants",
			options: insidepocketOptions,
			selectedOption: selectedInsidePockets,
			setSelectedOption: setSelectedPockets,
			className: "pocket_option grid_layout",
		},
		{
			title: "Embroidery Thread",
			options: embroideryThreadOptions,
			selectedOption: embroideryThread,
			setSelectedOption: setEmbroideryThread,
			className: "embroidery_option grid_layout",
		},
		{
			title: "Embroidery – position",
			options: insideembroideryOptions,
			selectedOption: selectedEmbroidery,
			setSelectedOption: setSelectedEmbroidery,
			className: "pocket_option grid_layout",
			disabled: embroideryThread === "Without Embroidery",
		},
		{
			title: "Sleeve Button holes - Variants",
			options: SleeveButtonholesVariants,
			selectedOption: selectedInsideSleeveButtonholesVariant,
			setSelectedOption: setSelectedInsideSleeveButtonholesVariant,
			className: "pocket_option grid_layout",
		},
		{
			title: "Buttons on Sleeve vent – position",
			options: SleeveButtonholesPosition,
			selectedOption: selectedInsideSleeveButtonPosition,
			setSelectedOption: setSelectedInsideSleeveButtonPosition,
			className: "pocket_option grid_layout",
		},
		{
			title: "Buttons – types of the stitching",
			options: SleeveButtonStichingtype,
			selectedOption: selectedTypesOfTheStitching,
			setSelectedOption: setSelectedTypesOfTheStitching,
			className: "pocket_option grid_layout",
		},
		{
			title: "Elbow Patches – Variant",
			options: ElbowPatchesVariant,
			selectedOption: selectedElbowPatches,
			setSelectedOption: setSelectedElbowPatches,
			className: "pocket_option grid_layout",
		},
	];

	// Backend Options
	const sleeveButtonOptions = [
		{
			label: "Center Vent",
			iconClass: "icon_70",
			onClick: () => {
				onSelectSleeveButtons("Center Vent");
				setSelectedSleeveButtons("Center Vent");
			},
		},
		{
			label: "Side Vents",
			iconClass: "icon_71",
			onClick: () => {
				onSelectSleeveButtons("Side Vents");
				setSelectedSleeveButtons("Side Vents");
			},
		},
	];

	const BackendOptionsMap = [
		{
			title: "Back Style",
			options: sleeveButtonOptions,
			selectedOption: selectedSleeveButtons,
			setSelectedOption: setSelectedSleeveButtons,
			className: "back_option grid_layout",
		},
	];

	// Other Options

	const pleatsOptions = [
		{
			label: "No Pleats",
			iconClass: 'icon man_pants icon_35 normal "',
			onClick: () => {
				onSelectPleats("No Pleats");
				setSelectedPleats("No Pleats");
			},
		},
		{
			label: "Pleated",
			iconClass: "icon_33 man_pants",
			onClick: () => {
				onSelectPleats("Pleated");
				setSelectedPleats("Pleated");
			},
		},
		{
			label: "Double pleats",
			iconClass: "icon_34 man_pants",
			onClick: () => {
				onSelectPleats("Double pleats");
				setSelectedPleats("Double pleats");
			},
		},
	];

	const activeWaistOptions = [
		{
			label: "Standard",
			iconClass: "icon_6e",
			onClick: () => {
				onSelectActiveWaist("Standard");
				setSelectedActiveWaist("Standard");
			},
		},
		{
			label: "Active (+10€)",
			iconClass: "icon_60",
			onClick: () => {
				onSelectActiveWaist("Active (+10€)");
				setSelectedActiveWaist("Active (+10€)");
			},
		},
	];

	const vestOptions = [
		{
			label: "2 piece suit",
			iconClass: "icon_2b medium ",
			onClick: () => {
				onSelectVest("2 piece suit");
				setSelectedVest("2 piece suit");
			},
		},
		{
			label: "3 piece suit",
			iconClass: "icon_2a medium",
			onClick: () => {
				onSelectVest("3 piece suit");
				setSelectedVest("3 piece suit");
			},
		},
	];

	const OtherOptionsMap = [
		{
			title: "Pleats",
			options: pleatsOptions,
			selectedOption: selectedPleats,
			setSelectedOption: setSelectedPleats,
			className: "pleats_option grid_layout",
		},
		{
			title: "Active Waist",
			options: activeWaistOptions,
			selectedOption: selectedActiveWaist,
			setSelectedOption: setSelectedActiveWaist,
			className: "active_option grid_layout",
		},
		{
			title: "Vest",
			options: vestOptions,
			selectedOption: selectedVest,
			setSelectedOption: setSelectedVest,
			className: "vest_option grid_layout",
		},
	];

	// Advanced Styling

	const lapelbuttonOptions = [
		{
			label: "In tone with fabric",
			iconClass: "bg_images_icons lapel_button_whole_color",
			onClick: () => {
				onSelectLapelbuttonwholecolor("In tone with fabric");
				setSelectedLapelbuttonwholecolor("In tone with fabric");
			},
		},
		{
			label: "Catalogue",
			iconClass: "bg_images_icons lapel_button_whole_color",
			onClick: () => {
				onSelectLapelbuttonwholecolor("Catalogue");
				setSelectedLapelbuttonwholecolor("Catalogue");
			},
		},
	];

	const modelsbuttonsPlacementOptions = [
		{
			label: "Standard Position",
			iconClass: "bg_images_icons modelsbuttons_placementoptions",
			onClick: () => {
				onselectPositionOfTheButtons("Standard Position");
				setSelectedPositionOfTheButtons("Standard Position");
			},
		},
		{
			label: "Movement of the upper button",
			iconClass: "bg_images_icons modelsbuttons_placementoptions_1",
			onClick: () => {
				onselectPositionOfTheButtons("Movement of the upper button");
				setSelectedPositionOfTheButtons("Movement of the upper button");
			},
		},
		{
			label: " Movement of the lower button",
			iconClass: "bg_images_icons modelsbuttons_placementoptions_2",
			onClick: () => {
				onselectPositionOfTheButtons("Movement of the lower button");
				setSelectedPositionOfTheButtons("Movement of the lower button");
			},
		},
	];

	const outsidestitchingOptions = [
		{
			label: "AMF",
			iconClass: "bg_images_icons out_side_amf_stichng",
			onClick: () => {
				onSelectOutsidedecorativestitchingtype("AMF");
				setSelectedOutsidedecorativestitchingtype("AMF");
			},
		},
		{
			label: "Top Stitching",
			iconClass: "bg_images_icons out_side_amf_stichng",
			onClick: () => {
				onSelectOutsidedecorativestitchingtype("Top Stitching");
				setSelectedOutsidedecorativestitchingtype("Top Stitching");
			},
		},
	];

	const outsidestitchingpositionOptions = [
		{
			label: "Without Decorative Stitching",
			iconClass: "bg_images_icons out_side_stiching_position_optons",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("Without Decorative Stitching");
				setSelectedOutsidedecorativestitchingposition("Without Decorative Stitching");
			},
		},
		{
			label: "On the front edges",
			iconClass: "bg_images_icons out_side_stiching_position_optons_1",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On the front edges");
				setSelectedOutsidedecorativestitchingposition("On the front edges");
			},
		},
		{
			label: "On the flaps of the outside pockets",
			iconClass: "bg_images_icons out_side_stiching_position_optons_2",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On the flaps of the outside pockets");
				setSelectedOutsidedecorativestitchingposition("On the flaps of the outside pockets");
			},
		},
		{
			label: "On Small Chest Pocket",
			iconClass: "bg_images_icons out_side_stiching_position_optons_3",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On Small Chest Pocket");
				setSelectedOutsidedecorativestitchingposition("On Small Chest Pocket");
			},
		},
		{
			label: "On Sleeve Vent",
			iconClass: "bg_images_icons out_side_stiching_position_optons_4",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On Sleeve Vent");
				setSelectedOutsidedecorativestitchingposition("On Sleeve Vent");
			},
		},
		{
			label: "On the Front Dart",
			iconClass: "bg_images_icons out_side_stiching_position_optons_5",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On the Front Dart");
				setSelectedOutsidedecorativestitchingposition("On the Front Dart");
			},
		},
		{
			label: "On shoulder",
			iconClass: "bg_images_icons out_side_stiching_position_optons_6",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On shoulder");
				setSelectedOutsidedecorativestitchingposition("On shoulder");
			},
		},
		{
			label: "On Back Vents",
			iconClass: "bg_images_icons out_side_stiching_position_optons_7",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On Back Vents");
				setSelectedOutsidedecorativestitchingposition("On Back Vents");
			},
		},
		{
			label: "On side seam + vents",
			iconClass: "bg_images_icons out_side_stiching_position_optons_8",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On side seam + vents");
				setSelectedOutsidedecorativestitchingposition("On side seam + vents");
			},
		},
		{
			label: "On Elbow Seam",
			iconClass: "bg_images_icons out_side_stiching_position_optons_9",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On Elbow Seam");
				setSelectedOutsidedecorativestitchingposition("On Elbow Seam");
			},
		},
		{
			label: "On Central Back Seam",
			iconClass: "bg_images_icons out_side_stiching_position_optons_10",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("On Central Back Seam");
				setSelectedOutsidedecorativestitchingposition("On Central Back Seam");
			},
		},
		{
			label: "Around the Armhole",
			iconClass: "bg_images_icons out_side_stiching_position_optons_11",
			onClick: () => {
				onSelectOutsidedecorativestitchingposition("Around the Armhole");
				setSelectedOutsidedecorativestitchingposition("Around the Armhole");
			},
		},
	];

	const outsidestitchingedgeOptions = [
		{
			label: "AMF 2мм",
			iconClass: "bg_images_icons oust_side_edge_stich",
			onClick: () => {
				onSelectOutsidedecorativestitchingedge("AMF 2мм");
				setSelectedOutsidedecorativestitchingedge("AMF 2мм");
			},
		},
		{
			label: "AMF 5мм",
			iconClass: "bg_images_icons oust_side_edge_stich_1 ",
			onClick: () => {
				onSelectOutsidedecorativestitchingedge("AMF 5мм");
				setSelectedOutsidedecorativestitchingedge("AMF 5мм");
			},
		},
		{
			label: "AMF 8мм",
			iconClass: "bg_images_icons oust_side_edge_stich_2",
			onClick: () => {
				onSelectOutsidedecorativestitchingedge("AMF 8мм");
				setSelectedOutsidedecorativestitchingedge("AMF 8мм");
			},
		},
		{
			label: "Top Stitching 2мм",
			iconClass: "bg_images_icons oust_side_edge_stich_3",
			onClick: () => {
				onSelectOutsidedecorativestitchingedge("Top Stitching 2мм");
				setSelectedOutsidedecorativestitchingedge("Top Stitching 2мм");
			},
		},
		{
			label: "Top Stitching 5мм",
			iconClass: "bg_images_icons oust_side_edge_stich_4",
			onClick: () => {
				onSelectOutsidedecorativestitchingedge("Top Stitching 5мм");
				setSelectedOutsidedecorativestitchingedge("Top Stitching 5мм");
			},
		},
		{
			label: "Top Stitching 8мм",
			iconClass: "bg_images_icons oust_side_edge_stich_5",
			onClick: () => {
				onSelectOutsidedecorativestitchingedge("Top Stitching 8мм");
				setSelectedOutsidedecorativestitchingedge("Top Stitching 8мм");
			},
		},
	];

	const insidePocketsOption = [
		{
			label: "Without zipper on the pockets",
			iconClass: "bg_images_icons insidepocketsoption_zapier",
			onClick: () => {
				onSelectetInsidePocketswithzipper("Without zipper on the pockets");
				setSelectedInsidePocketswithzipper("Without zipper on the pockets");
			},
		},
		{
			label: "Zipper on upper left inside pocket",
			iconClass: "bg_images_icons insidepocketsoption_zapier_1",
			onClick: () => {
				onSelectetInsidePocketswithzipper("Zipper on upper left inside pocket");
				setSelectedInsidePocketswithzipper("Zipper on upper left inside pocket");
			},
		},
		{
			label: "Zipper on upper right pocket",
			iconClass: "bg_images_icons insidepocketsoption_zapier_2",
			onClick: () => {
				onSelectetInsidePocketswithzipper("Zipper on upper right pocket");
				setSelectedInsidePocketswithzipper("Zipper on upper right pocket");
			},
		},
		{
			label: "Zipper on left ticket pocket",
			iconClass: "bg_images_icons insidepocketsoption_zapier_3",
			onClick: () => {
				onSelectetInsidePocketswithzipper("Zipper on left ticket pocket");
				setSelectedInsidePocketswithzipper("Zipper on left ticket pocket");
			},
		},
		{
			label: "Zipper on right ticket pocket",
			iconClass: "bg_images_icons insidepocketsoption_zapier_4",
			onClick: () => {
				onSelectetInsidePocketswithzipper("Zipper on right ticket pocket");
				setSelectedInsidePocketswithzipper("Zipper on right ticket pocket");
			},
		},
	];

	const insidePocketsJetsOption = [
		{
			label: "Without bartack",
			iconClass: "bg_images_icons inside_pocket_jetts_b",
			onClick: () => {
				onSelectedInsidePocketJettsBartackType("Without bartack");
				setSelectedInsidePocketJettsBartackType("Without bartack");
			},
		},
		{
			label: "Bartack",
			iconClass: "bg_images_icons inside_pocket_jetts_b_1",
			onClick: () => {
				onSelectedInsidePocketJettsBartackType("Bartack");
				setSelectedInsidePocketJettsBartackType("Bartack");
			},
		},
		{
			label: "D – Bartack",
			iconClass: "bg_images_icons inside_pocket_jetts_2",
			onClick: () => {
				onSelectedInsidePocketJettsBartackType("D – Bartack");
				setSelectedInsidePocketJettsBartackType("D – Bartack");
			},
		},
	];

	const insidePocketsJetsColorOption = [
		{
			label: "In tone with lining",
			iconClass: "bg_images_icons inside_pocks_jac_colors",
			onClick: () => {
				onSelectedInsidePocketJettsBartackColour("In tone with lining");
				setSelectedInsidePocketJettsBartackColour("In tone with lining");
			},
		},
		{
			label: "Catalogue",
			iconClass: "bg_images_icons inside_pocks_jac_colors_1",
			onClick: () => {
				onSelectedInsidePocketJettsBartackColour("Catalogue");
				setSelectedInsidePocketJettsBartackColour("Catalogue");
			},
		},
	];

	const insidePocketsJetsPositionOption = [
		{
			label: "Without Envelope Flap",
			iconClass: "bg_images_icons ins_jts_pos_optin",
			onClick: () => {
				onSelectPocketEnvelopeFlapPosition("Without Envelope Flap");
				setSelectedPocketEnvelopeFlapPosition("Without Envelope Flap");
			},
		},
		{
			label: "On the right inside pocket",
			iconClass: "bg_images_icons ins_jts_pos_optin_1",
			onClick: () => {
				onSelectPocketEnvelopeFlapPosition("On the right inside pocket");
				setSelectedPocketEnvelopeFlapPosition("On the right inside pocket");
			},
		},
		{
			label: "On the left inside pocket",
			iconClass: "bg_images_icons ins_jts_pos_optin_2",
			onClick: () => {
				onSelectPocketEnvelopeFlapPosition("On the left inside pocket");
				setSelectedPocketEnvelopeFlapPosition("On the left inside pocket");
			},
		},
		{
			label: "On the left and the right inside pockets",
			iconClass: "bg_images_icons ins_jts_pos_optin_3",
			onClick: () => {
				onSelectPocketEnvelopeFlapPosition("On the left and the right inside pockets");
				setSelectedPocketEnvelopeFlapPosition("On the left and the right inside pockets");
			},
		},
	];

	const insidePocketsEnvelopePosition = [
		{
			label: "Button Hole Envelop",
			iconClass: "bg_images_icons flap_insidE_poket",
			onClick: () => {
				onSelectedInsidePocketEnvelopeFlapClosure("Button Hole Envelop");
				setSelectedInsidePocketEnvelopeFlapClosure("Button Hole Envelop");
			},
		},
		{
			label: "Button Loop Envelop",
			iconClass: "bg_images_icons flap_insidE_poket_1",
			onClick: () => {
				onSelectedInsidePocketEnvelopeFlapClosure("Button Loop Envelop");
				setSelectedInsidePocketEnvelopeFlapClosure("Button Loop Envelop");
			},
		},
	];

	const insideColumbiaEnvelopePosition = [
		{
			label: "Without Columbia",
			iconClass: "bg_images_icons columbia_image_icons_velop",
			onClick: () => {
				onSelectColumbiaInsideDecorativeStitching("Without Columbia");
				setSelectedColumbiaInsideDecorativeStitching("Without Columbia");
			},
		},
		{
			label: "Columbia Catalogue Colour",
			iconClass: "bg_images_icons columbia_image_icons_velop_1",
			onClick: () => {
				onSelectColumbiaInsideDecorativeStitching("Columbia Catalogue Colour");
				setSelectedColumbiaInsideDecorativeStitching("Columbia Catalogue Colour");
			},
		},
	];

	const insideSweetEnvelopePosition = [
		{
			label: "Without sweat piece",
			iconClass: "bg_images_icons inside_sweet_velop_postn",
			onClick: () => {
				onSelectSweatPiece("Without sweat piece");
				setSelectedSweatPiece("Without sweat piece");
			},
		},
		{
			label: "Sweat piece from main lining",
			iconClass: "bg_images_icons inside_sweet_velop_postn_1",
			onClick: () => {
				onSelectSweatPiece("Sweat piece from main lining");
				setSelectedSweatPiece("Sweat piece from main lining");
			},
		},
		{
			label: "Sweat piece from main fabric",
			iconClass: "bg_images_icons inside_sweet_velop_postn_2",
			onClick: () => {
				onSelectSweatPiece("Sweat piece from main fabric");
				setSelectedSweatPiece("Sweat piece from main fabric");
			},
		},
	];

	const insideLabelsEnvelopePosition = [
		{
			label: "Mill Label №2 under pen pocket",
			iconClass: "bg_images_icons inside_pos_velop_lbls",
			onClick: () => {
				onSelectPositionOfLabels("Mill Label №2 under pen pocket");
				setSelectedPositionOfLabels("Mill Label №2 under pen pocket");
			},
		},
		{
			label: "Customer Label №1 under pen pocket",
			iconClass: "bg_images_icons inside_pos_velop_lbls_1",
			onClick: () => {
				onSelectPositionOfLabels("Customer Label №1 under pen pocket");
				setSelectedPositionOfLabels("Customer Label №1 under pen pocket");
			},
		},
		{
			label: "Customer Label №1 on the left",
			iconClass: "bg_images_icons inside_pos_velop_lbls_2",
			onClick: () => {
				onSelectPositionOfLabels("Customer Label №1 on the left");
				setSelectedPositionOfLabels("Customer Label №1 on the left");
			},
		},
		{
			label: "Customer label №1 on the right",
			iconClass: "bg_images_icons inside_pos_velop_lbls_3",
			onClick: () => {
				onSelectPositionOfLabels("Customer label №1 on the right");
				setSelectedPositionOfLabels("Customer label №1 on the right");
			},
		},
		{
			label: "Customer Label on the sleeve",
			iconClass: "bg_images_icons inside_pos_velop_lbls_4",
			onClick: () => {
				onSelectPositionOfLabels("Customer Label on the sleeve");
				setSelectedPositionOfLabels("Customer Label on the sleeve");
			},
		},
		{
			label: ' Carton label "Cantarelli"on the sleeve cuff',
			iconClass: "bg_images_icons inside_pos_velop_lbls_5",
			onClick: () => {
				onSelectPositionOfLabels('Carton label "Cantarelli"on the sleeve cuff');
				setSelectedPositionOfLabels('Carton label "Cantarelli"on the sleeve cuff');
			},
		},
	];

	const insideLabelsCustomerEnvelopePosition = [
		{
			label: "In tone with the label",
			iconClass: "bg_images_icons ins_st_cstmr_vlp_ptn",
			onClick: () => {
				onSelectStitchingLabelColor("In tone with the label");
				setSelectedStitchingLabelColor("In tone with the label");
			},
		},
		{
			label: "Catalogue",
			iconClass: "bg_images_icons ins_st_cstmr_vlp_ptn_1",
			onClick: () => {
				onSelectStitchingLabelColor("Catalogue");
				setSelectedStitchingLabelColor("Catalogue");
			},
		},
	];

	const insideLabelsStitchingEnvelopePosition = [
		{
			label: "Straight Stitching",
			iconClass: "bg_images_icons ins_stch_lbls_pos_lop",
			onClick: () => {
				onSelectCustomerLabelTypeStitching("Straight Stitching");
				setSelectedCustomerLabelTypeStitching("Straight Stitching");
			},
		},
		{
			label: "Zig-Zag",
			iconClass: "bg_images_icons ins_stch_lbls_pos_lop_1",
			onClick: () => {
				onSelectCustomerLabelTypeStitching("Zig-Zag");
				setSelectedCustomerLabelTypeStitching("Zig-Zag");
			},
		},
	];

	const insideButtonholesSleevesEnvelopePosition = [
		{
			label: "Non functional buttonholes on sleeves",
			iconClass: "bg_images_icons btn_whols_sleevs_pos_velop_opt",
			onClick: () => {
				onSelectButtonholesOnSleeves("Non functional buttonholes on sleeves");
				setSelectedButtonholesOnSleeves("Non functional buttonholes on sleeves");
			},
		},
		{
			label: "Functional buttonholes on sleeves",
			iconClass: "bg_images_icons btn_whols_sleevs_pos_velop_opt_1",
			onClick: () => {
				onSelectButtonholesOnSleeves("Functional buttonholes on sleeves");
				setSelectedButtonholesOnSleeves("Functional buttonholes on sleeves");
			},
		},
		{
			label: "Two functional and two non functional",
			iconClass: "bg_images_icons btn_whols_sleevs_pos_velop_opt_2",
			onClick: () => {
				onSelectButtonholesOnSleeves("Two functional and two non functional");
				setSelectedButtonholesOnSleeves("Two functional and two non functional");
			},
		},
		{
			label: "One functional and three non functional",
			iconClass: "bg_images_icons btn_whols_sleevs_pos_velop_opt_3",
			onClick: () => {
				onSelectButtonholesOnSleeves("One functional and three non functional");
				setSelectedButtonholesOnSleeves("One functional and three non functional");
			},
		},
	];

	const AdvancejacketOptionsMap = [
		{
			title: "Lapel button whole color",
			options: lapelbuttonOptions,
			selectedOption: selectedLapelbuttonwholecolor,
			setSelectedOption: setSelectedLapelbuttonwholecolor,
			className: "styled_option grid_layout",
		},
		{
			title: "Position of the buttons",
			options: modelsbuttonsPlacementOptions,
			selectedOption: selectedPositionOfTheButtons,
			setSelectedOption: setSelectedPositionOfTheButtons,
			className: "styled_option grid_layout",
		},
		{
			title: "Outside decorative stitching type",
			options: outsidestitchingOptions,
			selectedOption: selectedOutsidedecorativestitchingtype,
			setSelectedOption: setSelectedOutsidedecorativestitchingtype,
			className: "styled_option grid_layout",
		},
		{
			title: "Outside decorative stitching position",
			options: outsidestitchingpositionOptions,
			selectedOption: selectedOutsidedecorativestitchingposition,
			setSelectedOption: setSelectedOutsidedecorativestitchingposition,
			className: "styled_option grid_layout",
		},
		{
			title: "Outside decorative stitching edge",
			options: outsidestitchingedgeOptions,
			selectedOption: selectedOutsidedecorativestitchingedge,
			setSelectedOption: setSelectedOutsidedecorativestitchingedge,
			className: "styled_option grid_layout",
		},
		{
			title: "Inside Pockets – with zipper",
			options: insidePocketsOption,
			selectedOption: selectedInsidePocketswithzipper,
			setSelectedOption: setSelectedInsidePocketswithzipper,
			className: "styled_option grid_layout",
		},
		{
			title: "Inside Pocket Jetts – Bartack Type",
			options: insidePocketsJetsOption,
			selectedOption: selectedInsidePocketJettsBartackType,
			setSelectedOption: setSelectedInsidePocketJettsBartackType,
			className: "styled_option grid_layout",
		},
		{
			title: "Inside Pocket Jetts – Bartack Colour",
			options: insidePocketsJetsColorOption,
			selectedOption: selectedInsidePocketJettsBartackColour,
			setSelectedOption: setSelectedInsidePocketJettsBartackColour,
			className: "styled_option grid_layout",
		},
		{
			title: "Inside Pocket Envelope Flap – Position",
			options: insidePocketsJetsPositionOption,
			selectedOption: SelectedPocketEnvelopeFlapPosition,
			setSelectedOption: setSelectedPocketEnvelopeFlapPosition,
			className: "styled_option grid_layout",
		},
		{
			title: "Inside Pocket Envelope Flap – Closure",
			options: insidePocketsEnvelopePosition,
			selectedOption: selectedInsidePocketEnvelopeFlapClosure,
			setSelectedOption: setSelectedInsidePocketEnvelopeFlapClosure,
			className: "styled_option grid_layout",
		},
		{
			title: "Columbia – inside decorative stitching",
			options: insideColumbiaEnvelopePosition,
			selectedOption: selectedColumbiaInsideDecorativeStitching,
			setSelectedOption: setSelectedColumbiaInsideDecorativeStitching,
			className: "styled_option grid_layout",
		},
		{
			title: "Sweat Piece / ONLY FOR MEN`S JACKETS /",
			options: insideSweetEnvelopePosition,
			selectedOption: selectedSweatPiece,
			setSelectedOption: setSelectedSweatPiece,
			className: "styled_option grid_layout",
		},
		{
			title: "Position of the Labels",
			options: insideLabelsEnvelopePosition,
			selectedOption: selectedPositionOfLabels,
			setSelectedOption: setSelectedPositionOfLabels,
			className: "styled_option grid_layout",
		},
		{
			title: "Stitching of the Customer Label – colour of the thread",
			options: insideLabelsCustomerEnvelopePosition,
			selectedOption: selectedStitchingLabelColor,
			setSelectedOption: setSelectedStitchingLabelColor,
			className: "styled_option grid_layout",
		},
		{
			title: "Customer Label – Type of the Stitching",
			options: insideLabelsStitchingEnvelopePosition,
			selectedOption: selectedCustomerLabelTypeStitching,
			setSelectedOption: setSelectedCustomerLabelTypeStitching,
			className: "styled_option grid_layout",
		},
		{
			title: "Buttonholes on Sleeves",
			options: insideButtonholesSleevesEnvelopePosition,
			selectedOption: selectedButtonholesOnSleeves,
			setSelectedOption: setSelectedButtonholesOnSleeves,
			className: "styled_option grid_layout",
		},
	];

	const [ChangedVersion, setChangedVersion] = useState(true); // true for simplified, false for advanced
	const [sidebarOpen, setSidebarOpen] = useState(false); // Manage sidebar visibility
	const [currentTitle, setCurrentTitle] = useState(""); // Track the current title to display in the sidebar
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); // Track selected option index for advanced options
	const [activeItems, setActiveItems] = useState([]);
	const [openSection, setOpenSection] = useState("front"); // Track the currently open section

	const handleAccordionTitleClick = (section) => {
		setOpenSection(openSection === section ? null : section);
	};

	const toggleVersion = () => {
		setChangedVersion(!ChangedVersion); // Toggle the version
		setSidebarOpen(true); // Open the sidebar when switching to advanced
	};

	const handleTitleClick = (title, index) => {
		setCurrentTitle(title);
		setSelectedOptionIndex(index);
		setSidebarOpen(false);
		setActiveItems([title]);
	};

	const openSideBar = () => {
		setSidebarOpen(true);
	};

	const closeSidebar = () => {
		setSidebarOpen(false);
	};

	//need to add useCallback for performance improvement if any issue

	useEffect(() => {
		const newSelection = {
			id: id,
			quantity: 1,
			price: price,
			base: base,
			embroideryThread: embroideryThread,
			embroideryThreadColor: embroideryThreadColor,
			febricaSelection: selectedFebric,
			style: selectedStyle,
			Embroideryposition: selectedEmbroidery,
			Mixmatchfabrics: selectedFit,
			lapelStyle: selectedLapel,
			lapelWidth: selectedLapelWidth,
			pocketStyle: selectedPockets,
			insidePockets: selectedInsidePockets,
			positionOfbuttons: selectedPositionOfTheButtons,
			lapelbuttonwholecolor: selectedLapelbuttonwholecolor,
			sleeveButtonholes: selectedInsideSleeveButtonholesVariant,
			sleeveButtonPositions: selectedInsideSleeveButtonPosition,
			typesOfTheStitching: selectedTypesOfTheStitching,
			elbowPatches: selectedElbowPatches,
			pocketEnvelopeFlapPosition: SelectedPocketEnvelopeFlapPosition,
			outsidedecorativestitchingtype: selectedOutsidedecorativestitchingtype,
			outsidedecorativestitchingposition: selectedOutsidedecorativestitchingposition,
			outsidedecorativestitchingedge: selectedOutsidedecorativestitchingedge,
			insidePocketswithzipper: selectedInsidePocketswithzipper,
			insidePocketJettsBartackType: selectedInsidePocketJettsBartackType,
			insidePocketJettsBartackColour: selectedInsidePocketJettsBartackColour,
			insidePocketEnvelopeFlapClosure: selectedInsidePocketEnvelopeFlapClosure,
			columbiaInsideDecorativeStitching: selectedColumbiaInsideDecorativeStitching,
			sweatPiece: selectedSweatPiece,
			positionOfLabels: selectedPositionOfLabels,
			stitchingLabelColour: selectedStitchingLabelColor,
			customerLabelTypeStitching: selectedCustomerLabelTypeStitching,
			buttonholesOnSleeves: selectedButtonholesOnSleeves,
		};

		handleSelectData(newSelection);
	}, [
		selectedStyle,
		embroideryThread,
		selectedOutsidedecorativestitchingposition,
		selectedFit,
		embroideryThreadColor,
		selectedLapel,
		selectedLapelWidth,
		selectedPockets,
		selectedInsidePockets,
		selectedPositionOfTheButtons,

		selectedInsideSleeveButtonholesVariant,
		selectedInsideSleeveButtonPosition,
		selectedTypesOfTheStitching,
		selectedElbowPatches,
		selectedLapelbuttonwholecolor,

		//need to add in db from here

		selectedOutsidedecorativestitchingtype,
		SelectedPocketEnvelopeFlapPosition,
		selectedOutsidedecorativestitchingedge,
		selectedInsidePocketswithzipper,
		selectedInsidePocketJettsBartackType,
		selectedInsidePocketJettsBartackColour,
		selectedInsidePocketEnvelopeFlapClosure,
		selectedColumbiaInsideDecorativeStitching,
		selectedSweatPiece,
		selectedPositionOfLabels,
		selectedStitchingLabelColor,
	]);

	const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

	const handleNext = () => {
		const nextIndex = currentSectionIndex + 1;

		// Check if the next section is "Embroidery – position" and should be skipped
		if (FrontendOptionsMap[nextIndex]?.title === "Embroidery – position" && embroideryThread === "Without Embroidery") {
			setCurrentSectionIndex((prev) => prev + 2); // Skip the next section
		} else if (currentSectionIndex < FrontendOptionsMap.length - 1) {
			setCurrentSectionIndex((prev) => prev + 1); // Move to the next section
		}
	};

	const handlePrevious = () => {
		const prevIndex = currentSectionIndex - 1;

		// Check if the previous section is "Embroidery – position" and should be skipped
		if (FrontendOptionsMap[prevIndex]?.title === "Embroidery – position" && embroideryThread === "Without Embroidery") {
			setCurrentSectionIndex((prev) => prev - 2); // Skip the previous section
		} else if (currentSectionIndex > 0) {
			setCurrentSectionIndex((prev) => prev - 1); // Move to the previous section
		}
	};

	return (
		<div className={`jacket-options ${className} option_trigger`}>
			<div>
				<div className="flex justify-center gap-4">
					<button
						onClick={handlePrevious}
						disabled={currentSectionIndex === 0}
						className={`btn btn-prev px-4 py-2 text-white rounded-md ${
							currentSectionIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
						}`}>
						Previous
					</button>
					<button
						onClick={handleNext}
						disabled={currentSectionIndex === FrontendOptionsMap.length - 1}
						className={`btn btn-next px-4 py-2 text-white rounded-md ${
							currentSectionIndex === FrontendOptionsMap.length - 1
								? "bg-gray-400 cursor-not-allowed"
								: "bg-blue-500 hover:bg-blue-600"
						}`}>
						Next
					</button>
				</div>
				{FrontendOptionsMap.map(
					(section, index) =>
						index === currentSectionIndex && (
							<div key={index} className={`section ${section.disabled ? "opacity-50" : ""}`}>
								<h5 className="title">{section.title}</h5>
								<div className={`${section.className} ${section.disabled ? "pointer-events-none" : ""}`}>
									{section.options.map((option, idx) => (
										<div
											key={idx}
											className={`option 
                      ${section.selectedOption === option.label ? "active" : ""}
                      ${section.disabled ? "cursor-not-allowed" : "cursor-pointer"}
                    `}
											onClick={() => option.onClick()}>
											{option.imgSrc ? (
												<img alt={option.label} className="b-lazy b-loaded" src={option.imgSrc} />
											) : (
												<span className={`icon man_jacket ${option.iconClass} medium`} />
											)}
											<span className="text">{option.label}</span>
											{option.price && <span className="price">{option.price}</span>}
										</div>
									))}
								</div>

								{section.title === "Embroidery Thread" && (
									<DialogThread
										open={isThreadDialogOpen}
										setOpen={setIsThreadDialogOpen}
										onSelectThread={(color) => {
											setEmbroideryThreadColor(color);
										}}
									/>
								)}
							</div>
						),
				)}
			</div>
			{ChangedVersion ? (
				<>
					<div>
						{/* Backend Section */}
						<div className="accordion-item">
							<h5 className="accordion-title" onClick={() => handleAccordionTitleClick("backend")}>
								Backend
							</h5>
							<div className={`accordion-content ${openSection === "backend" ? "open" : ""}`}>
								{BackendOptionsMap.map((section, index) => (
									<div key={index}>
										<h5 className="title">{section.title}</h5>
										<div className={section.className}>
											{section.options.map((option, idx) => (
												<div
													key={idx}
													className={`option ${section.selectedOption === option.label ? "active" : ""}`}
													onClick={option.onClick}>
													{option.imgSrc ? (
														<img alt={option.label} className="b-lazy b-loaded" src={option.imgSrc} />
													) : (
														<span className={`icon man_jacket ${option.iconClass} medium`} />
													)}
													<span className="text">{option.label}</span>
													{option.price && <span className="price">{option.price}</span>}
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Other Section */}
						<div className="accordion-item">
							<h5 className="accordion-title" onClick={() => handleAccordionTitleClick("other")}>
								Other
							</h5>
							<div className={`accordion-content ${openSection === "other" ? "open" : ""}`}>
								{OtherOptionsMap.map((section, index) => (
									<div key={index}>
										<h5 className="title">{section.title}</h5>
										<div className={section.className}>
											{section.options.map((option, idx) => (
												<div
													key={idx}
													className={`option ${section.selectedOption === option.label ? "active" : ""}`}
													onClick={option.onClick}>
													{option.imgSrc ? (
														<img alt={option.label} className="b-lazy b-loaded" src={option.imgSrc} />
													) : (
														<span className={`icon man_jacket ${option.iconClass} medium`} />
													)}
													<span className="text">{option.label}</span>
													{option.price && <span className="price">{option.price}</span>}
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="box_opt change_full_version">
						<p>THIS IS A SIMPLIFIED 3D DESIGNER</p>
						<p>
							<a
								href="#"
								className="removeMinimal"
								onClick={toggleVersion} // Toggle the version on click
							>
								Switch to advanced version
							</a>
						</p>
					</div>
				</>
			) : (
				<>
					{/* Sidebar with smooth sliding transition */}
					<div className={`filters filters fabric_step ${sidebarOpen ? "active" : "closed_side"}`}>
						<div className="menu_filter">
							<div className="content">
								<div className="sidebar-container content_filters ps-container ps-active-y">
									<div className="sidebar item_menu_filter highlights active">
										<div className="sub_menu_filter active suit">
											<div className="filter-group item_menu_filter highlights active">
												<div className="items item_menu row active">
													<span className="filter-title title">{currentTitle}</span>
												</div>
												<ul className="filter sub_menu_filter active suit sidebar-options">
													{AdvancejacketOptionsMap.map((section, index) => (
														<li
															key={index}
															onClick={() => handleTitleClick(section.title, index)}
															className={`filter-item ${activeItems.includes(section.title) ? "active" : ""}`}>
															<a href="#" class="filter filter-link">
																{section.title}
															</a>
															<span class="check"></span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Advanced Options Section */}
					<div className="advanced-options">
						{selectedOptionIndex !== null && (
							<div>
								<h5 className="title">{AdvancejacketOptionsMap[selectedOptionIndex].title}</h5>
								<div className={AdvancejacketOptionsMap[selectedOptionIndex].className}>
									{AdvancejacketOptionsMap[selectedOptionIndex].options.map((option, idx) => (
										<div
											key={idx}
											className={`option ${
												AdvancejacketOptionsMap[selectedOptionIndex].selectedOption === option.label ? "active" : ""
											}`}
											onClick={option.onClick}>
											{option.imgSrc ? (
												<img
													alt={option.label}
													className="b-lazy b-loaded"
													src={option.imgSrc}
													data-src={option.imgSrc}
												/>
											) : (
												<span className={`icon man_jacket ${option.iconClass} medium`} />
											)}
											<span className="text">{option.label}</span>
											{option.price && <span className="price">{option.price}</span>}
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Version toggle */}
					<div className="box_opt change_full_version">
						<p>THIS IS AN ADVANCED 3D DESIGNER</p>
						<p>
							<a
								href="#"
								className="removeMinimal"
								onClick={() => {
									toggleVersion();
									closeSidebar();
								}} // Close sidebar and toggle version
							>
								Switch to Simplified version
							</a>
							<br />
							<a
								href="#"
								className="removeMinimal"
								onClick={() => {
									openSideBar();
								}} // Close sidebar and toggle version
							>
								Advanced version Option
							</a>
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default JacketOptions;

const DialogThread = ({ open, setOpen, onSelectThread }) => {
	const threadColors = [
		{ color: "BR01", image: "/images/BR01.png" },
		{ color: "BR02", image: "/images/BR02.png" },
		{ color: "BR03", image: "/images/BR03.png" },
		{ color: "BR04", image: "/images/BR04.png" },
		{ color: "DBL01", image: "/images/DBL01.png" },
		{ color: "DGRO1", image: "/images/DGRO1.png" },
		{ color: "DGR02", image: "/images/DGR02.png" },
		{ color: "GOLD01", image: "/images/GOLD01.png" },
	];

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="text-white bg-black/50  p-6 rounded-lg shadow-2xl border border-gray-800">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold tracking-wide text-center mb-4">
						Select Thread Color
					</DialogTitle>
				</DialogHeader>
				<div
					className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 overflow-y-auto"
					style={{ maxHeight: "400px", scrollbarWidth: "none" }} // Hide scrollbar in Firefox
				>
					{threadColors.map((thread) => (
						<button
							key={thread.color}
							className="flex flex-col items-center gap-2 p-3 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 hover:scale-105 transition-all duration-300"
							onClick={() => {
								onSelectThread(thread.color);
								setOpen(false);
							}}>
							<span className="text-sm capitalize text-gray-300">{thread.color}</span>
							<img
								src={thread.image}
								alt={thread.color}
								className="w-16 h-16 object-cover bg-center rounded-lg border border-gray-600"
							/>
						</button>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};
