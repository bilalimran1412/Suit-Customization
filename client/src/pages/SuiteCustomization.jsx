import React, { useState, useEffect } from "react";
import FabricSelection from "../components/FabricSelection";
import StyleSelection from "../components/StyleSelection";
import Preview from "../components/Preview";
import "../css/app.css"; // Add styles for your component
import LapelSelection from "../components/LapelSelection";
import { SidebarProvider } from "../components/SidebarContext";
import { useSelectedData } from "../context/SelectedData";

export function SuiteCustomization() {
	const [currentStep, setCurrentStep] = useState(1);
	const [selectedFabric, setSelectedFabric] = useState("");
	const [selectedStyle, setSelectedStyle] = useState("");
	const [selectedLapel, setSelectedLapel] = useState("");
	const [selectedLapelWidth, setSelectedLapelWidth] = useState("");
	const [selectedFit, setSelectedFit] = useState("");
	const [transition, setTransition] = useState("slide_without");
	const [setOuttransition, setoutstransition] = useState("");
	const [showLapel, setShowLapel] = useState(false);
	const [showFit, setShowFit] = useState(false);
	const [selectedPrice, setSelectedPrice] = useState("");
	const [selectedLapelbuttonwholecolor, setSelectedLapelbuttonwholecolor] = useState("");
	const [selectedPockets, setSelectedPockets] = useState("");
	const [selectedSleeveButtons, setSelectedSleeveButtons] = useState("");
	const [selectedPleats, setSelectedPleats] = useState("");
	const [selectedActiveWaist, setSelectedActiveWaist] = useState("");
	const [selectedVest, setSelectedVest] = useState("");
	const [selectedEmbroidery, setSelectedEmbroidery] = useState("");
	const [selectedPositionOfTheButtons, setSelectedPositionOfTheButtons] = useState("");
	const [selectedInsidePockets, setSelectedInsidePockets] = useState("");
	const [selectedInsideSleeveButtonholesVariant, setSelectedInsideSleeveButtonholesVariant] = useState("");
	const [selectedInsideSleeveButtonPosition, setSelectedInsideSleeveButtonPosition] = useState("");
	const [selectedTypesOfTheStitching, setSelectedTypesOfTheStitching] = useState("");
	const [selectedElbowPatches, setSelectedElbowPatches] = useState("");
	const [selectedPocketEnvelopeFlapPosition, setSelectedPocketEnvelopeFlapPosition] = useState("");
	const [selectedOutsidedecorativestitchingtype, setOutsidedecorativestitchingtype] = useState("");
	const [selectedOutsidedecorativestitchingposition, setOutsidedecorativestitchingposition] = useState("");
	const [selectedOutsidedecorativestitchingedge, setOutsidedecorativestitchingedge] = useState("");
	const [selectedInsidePocketswithzipper, setSelectedInsidePocketswithzipper] = useState("");
	const [selectedInsidePocketJettsBartackType, setSelectedInsidePocketJettsBartackType] = useState("");
	const [selectedInsidePocketJettsBartackColour, setSelectedInsidePocketJettsBartackColour] = useState("");
	const [selectedInsidePocketEnvelopeFlapClosure, setSelectedInsidePocketEnvelopeFlapClosure] = useState("");

	const [selectedColumbiainsidedecorativestitching, setSelectedColumbiainsidedecorativestitching] = useState("");
	const [selectedSweatPiece, setSelectedSweatPiece] = useState("");
	const [selecedPositionoftheLabels, setSelecedPositionoftheLabels] = useState("");
	const [selectedStitchingLabelcolour, setSelectedStitchingLabelcolour] = useState("");
	const [selectedCustomerLabelTypeStitching, setSelectedCustomerLabelTypeStitching] = useState("");
	const [selectedButtonholesOnSleeves, setSelectedButtonholesOnSleeves] = useState("");
	const { selectedData } = useSelectedData();

	useEffect(() => {
		console.log("Selected Data:", selectedData);
	}, [selectedData]);

	const nextStep = () => {
		setCurrentStep(currentStep + 1);
		console.log("In Current Step,", currentStep + 1);
	};

	const toggleLapel = () => {
		setTransition(showLapel ? "slide_right" : "slide_right");
		// setShowLapel(prevState => !prevState);
		setShowLapel(true);
	};

	const toggleFabrice = () => {
		setoutstransition(showLapel ? "slide_right" : "slide_right");
		// setShowLapel(prevState => !prevState);
		setShowLapel(false);
	};

	useEffect(() => {
		console.log("Selected Fabric:", selectedFabric);
	}, [selectedFabric]);

	return (
		<div className="App">
			<div
				className={`step-container ${showLapel ? "lapel-selected" : "fabric-selected"}`}
				style={{ flexBasis: showLapel ? "40vw" : "60vw" }}>
				<SidebarProvider>
					{!showLapel ? (
						<FabricSelection
							className={setOuttransition}
							onSelectFabric={setSelectedFabric}
							onSelectStyle={setSelectedStyle}
							onselectPrice={setSelectedPrice}
							onNext={nextStep}
						/>
					) : (
						<LapelSelection
							className={transition}
							onSelectColumbiaInsideDecorativeStitching={setSelectedColumbiainsidedecorativestitching}
							onSelectSweatPiece={setSelectedSweatPiece}
							onSelectPositionOfLabels={setSelecedPositionoftheLabels}
							onSelectStitchingLabelColor={setSelectedStitchingLabelcolour}
							onSelectCustomerLabelTypeStitching={setSelectedCustomerLabelTypeStitching}
							onSelectButtonholesOnSleeves={setSelectedButtonholesOnSleeves}
							onSelectedInsidePocketEnvelopeFlapClosure={setSelectedInsidePocketEnvelopeFlapClosure}
							onSelectedInsidePocketJettsBartackColour={setSelectedInsidePocketJettsBartackColour}
							onSelectedInsidePocketJettsBartackType={setSelectedInsidePocketJettsBartackType}
							onSelectetInsidePocketswithzipper={setSelectedInsidePocketswithzipper}
							onSelectOutsidedecorativestitchingedge={setOutsidedecorativestitchingedge}
							onSelectLapelbuttonwholecolor={setSelectedLapelbuttonwholecolor}
							onSelectStyle={setSelectedStyle}
							price={selectedPrice}
							onSelectOutsidedecorativestitchingtype={setOutsidedecorativestitchingtype}
							onSelectFit={setSelectedFit}
							onSelectLapel={setSelectedLapel}
							onselectPositionOfTheButtons={setSelectedPositionOfTheButtons}
							selectedFebric={selectedFabric}
							onSelectPocketEnvelopeFlapPosition={setSelectedPocketEnvelopeFlapPosition}
							onSelectElbowPatches={setSelectedElbowPatches}
							onSelectTypesOfTheStitching={setSelectedTypesOfTheStitching}
							onSelectEmbroidery={setSelectedEmbroidery}
							onSelectLapelWidth={setSelectedLapelWidth}
							onSelectSleeveButtonholesVariant={setSelectedInsideSleeveButtonholesVariant}
							onSelectPockets={setSelectedPockets}
							onSelectInsidePocketsSleveButtonPosition={setSelectedInsideSleeveButtonPosition}
							onSelectInsidePockets={setSelectedInsidePockets}
							onSelectSleeveButtons={setSelectedSleeveButtons}
							onSelectPleats={setSelectedPleats}
							onSelectActiveWaist={setSelectedActiveWaist}
							onSelectVest={setSelectedVest}
							onSelectOutsidedecorativestitchingposition={setOutsidedecorativestitchingposition}
						/>
					)}
				</SidebarProvider>
			</div>
			<Preview
				onFabricClick={toggleFabrice}
				onStyleClick={toggleLapel}
				fabric={selectedFabric}
				lapelbuttonwholecolor={selectedLapelbuttonwholecolor}
				price={selectedPrice}
				positionOfTheButtons={selectedPositionOfTheButtons}
				elbowPatches={selectedElbowPatches}
				style={selectedStyle}
				lapel={selectedLapel}
				lapelWidth={selectedLapelWidth}
				pocketEnvelopeFlapPosition={selectedPocketEnvelopeFlapPosition}
				embroidery={selectedEmbroidery}
				fit={selectedFit}
				typesOfTheStitching={selectedTypesOfTheStitching}
				pockets={selectedPockets}
				sleeveButtonholesVariant={selectedInsideSleeveButtonholesVariant}
				setSelectedInsideSleeveButtonPosition={selectedInsideSleeveButtonPosition}
				insidePockets={selectedInsidePockets}
				sleevebuttons={selectedSleeveButtons}
				pleats={selectedPleats}
				waist={selectedActiveWaist}
				vest={selectedVest}
				// need to add in db from here
				outsidedecorativestitchingtype={selectedOutsidedecorativestitchingtype}
				outsidedecorativestitchingposition={selectedOutsidedecorativestitchingposition}
				outsidedecorativestitchingedge={selectedOutsidedecorativestitchingedge}
				insidePocketswithzipper={selectedInsidePocketswithzipper}
				insidePocketJettsBartackType={selectedInsidePocketJettsBartackType}
				insidePocketJettsBartackColour={selectedInsidePocketJettsBartackColour}
				insidePocketEnvelopeFlapClosure={selectedInsidePocketEnvelopeFlapClosure}
			/>
		</div>
	);
}
