import React, { useState } from "react";
import "../css/Preview.css";
import imageLayers from "./imageLAyer.js";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useSelectedData } from "../context/SelectedData";
const Preview = ({
	lapelbuttonwholecolor,
	elbowPatches,
	setSelectedInsideSleeveButtonPosition,
	typesOfTheStitching,
	sleeveButtonholesVariant,
	embroidery,
	fabric,
	style,
	lapel,
	lapelWidth,
	fit,
	pockets,
	sleevebuttons,
	pleats,
	waist,
	vest,
	price,
	onStyleClick,
	onFabricClick,
	insidePockets,
	pocketEnvelopeFlapPosition,
}) => {
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const { selectedData } = useSelectedData();

	// const selectedImages = imageLayers[`${fabric}-${style}-${lapel}-${fit}`] || [];
	const [tabChange, settabChange] = useState(0);

	console.log(fabric);
	console.log(style);
	let className = "";
	if (sleevebuttons) {
		className = "back_options_styles";
	}
	if (pleats) {
		className = "ShowFullMen";
	}

	const options = [
		{
			title: "Fabric",
			imageSrc: "https://d1fufvy4xao6k9.cloudfront.net/images/man/jeans/materials.svg",
			rel: "fabric",
			style: null,
			onClick: () => onFabricClick(),
		},
		{
			title: "Style",
			imageSrc: "https://d1fufvy4xao6k9.cloudfront.net/images/man/jeans/style.svg",
			rel: "config",
			style: null,
			onClick: () => onStyleClick(),
		},
		{
			title: "Accents",
			imageSrc: "https://d1fufvy4xao6k9.cloudfront.net/images/man/jeans/extras.svg",
			rel: "extra",
			style: null,
			onClick: "",
		},
		{
			title: "Pants Fabric",
			imageSrc: "https://d1fufvy4xao6k9.cloudfront.net/images/man/jeans/materials.svg",
			rel: "fabric_pants",
			style: { display: "none" },
			onClick: "",
		},
		{
			title: "Vest Fabric",
			imageSrc: "https://d1fufvy4xao6k9.cloudfront.net/images/man/jeans/materials.svg",
			rel: "fabric_waistcoat",
			style: { display: "none" },
			onClick: "",
		},
	];

	const handleNextClick = () => {
		if (tabChange < options.length - 1) {
			const currentOption = options[tabChange];

			if (currentOption.onClick) {
				currentOption.onClick();
			}
			settabChange((prevTabChange) => prevTabChange + 1);
		} else if (tabChange === options.length - 1) {
			addToCart(selectedData);
			navigate("/cart");
		}
	};

	// Get the image path for the selected option in each category
	const getImageSrc = (category, value) => {
		if (value) {
			console.log(value, "this is value");
			console.log(category, "this is category");

			const imagePath = imageLayers.find((layer) => layer.name === category)?.options[value];
			console.log(imagePath, "this is image path");
			return imagePath;
		}
		return null; // Return null if no option is selected
	};

	return (
		<div className="suit-preview flex">
			<div className="right_side_selecter">
				<div className="options">
					{options.map((option, index) => (
						<div
							key={index}
							className={`option step ${tabChange === index ? "active" : ""}`} // Only activate the option that matches tabChange index
							rel={option.rel}
							style={option.style}
							onClick={() => {
								settabChange(index);
								if (option.onClick) {
									option.onClick();
								}
							}}>
							<div className="image_opt_text">
								<span>
									<img alt="" src={option.imageSrc} />
								</span>
								<div className="title">{option.title}</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={`${className}  betwen_different`}>
				<div className={`jacket-layers`}>
					{selectedData.febricaSelection && (
						<div>
							<img src={getImageSrc("style", selectedData.style)} alt="Fabric" className="suit-layer jacket" />
						</div>
					)}

					{selectedData.Style && (
						<img src={getImageSrc("style", selectedData.style)} alt="Style" className="suit-layer jacket" />
					)}
					<div className={`jacket-layers`}>
						{selectedData.base && (
							<img src={getImageSrc("base1", selectedData.base)} alt="Fabric" className="suit-layer jacket" />
						)}
						{selectedData.base && (
							<img src={getImageSrc("base2", selectedData.base)} alt="Fabric" className="suit-layer jacket" />
						)}
						{selectedData.base && (
							<img src={getImageSrc("base3", selectedData.base)} alt="Fabric" className="suit-layer jacket" />
						)}
						{selectedData.base && (
							<img src={getImageSrc("base4", selectedData.base)} alt="Fabric" className="suit-layer jacket" />
						)}

						{selectedData.base && (
							<img src={getImageSrc("base5", selectedData.base)} alt="Fabric" className="suit-layer jacket" />
						)}
						{selectedData.base && (
							<img src={getImageSrc("base6", selectedData.base)} alt="Fabric" className="suit-layer jacket" />
						)}
						{selectedData.base && (
							<img src={getImageSrc("base7", selectedData.base)} alt="Fabric" className="suit-layer jacket" />
						)}
						{selectedData.base && (
							<img src={getImageSrc("base8", selectedData.base)} alt="Fabric" className="suit-layer jacket" />
						)}
						{selectedData.febricaSelection && (
							<img
								src={getImageSrc("fabric", selectedData.febricaSelection)}
								alt="Fabric"
								className="suit-layer jacket"
							/>
						)}
						{selectedData.lapelWidth && (
							<img
								src={getImageSrc("lapel_width", selectedData.lapelWidth)}
								alt="Lapel Width"
								className="suit-layer jacket"
							/>
						)}
						{selectedData.lapelStyle && (
							<img
								src={getImageSrc("Lapel Style", selectedData.lapelStyle)}
								alt="Lapel Width"
								className="suit-layer jacket"
							/>
						)}

						{selectedData.pocketStyle && (
							<img src={getImageSrc("pocket", selectedData.pocketStyle)} alt="Pocket" className="suit-layer jacket" />
						)}
						{selectedData.Mixmatchfabrics && (
							<img
								src={getImageSrc("Mix & match fabrics", selectedData.Mixmatchfabrics)}
								alt="Mix & match fabrics"
								className="suit-layer jacket"
							/>
						)}
					</div>
				</div>
				<div className="pants-layers">
					{/* {selectedImages.slice(11).map((src, index) => (
						<img
							key={index + 11}
							src={src}
							alt={`Pants Layer ${index}`}
							className="suit-layer pants"
							style={{ zIndex: index + 12 }}
						/>
					))} */}
				</div>
			</div>
			<div className="left_side_content">
				<div className="other_description">
					<h1>Selected Fabric: {fabric}</h1>
					<p>Selected Style: {style}</p>
					<p className="price discount">Selected Price: {price}</p>

					<button className="onnext_view" onClick={handleNextClick}>
						Next
					</button>

					<h4>Order today, receive in 2 weeks.</h4>
					<p>Free shipping</p>
				</div>
			</div>
		</div>
	);
};

export default Preview;

//   return (
//     <div>
//       <h2>Customize Your Suit</h2>

//       {/* Render all selection dropdowns dynamically */}
//       {imageLayers.map((layer) => (
//         <div key={layer.name}>
//           <h3>Select {layer.name.replace("_", " ").toUpperCase()}</h3>
//           <select
//             onChange={(e) => handleSelectionChange(layer.name, e.target.value)}
//             value={selections[layer.name]}
//           >
//             <option value="">Select {layer.name}</option>
//             {Object.keys(layer.options).map((option) => (
//               <option key={option} value={option}>
//                 {option.replace("_", " ").toUpperCase()}
//               </option>
//             ))}
//           </select>
//         </div>
//       ))}

//       {/* Display the selected images for each option */}
//       <div>
//         <h3>Your Customized Suit</h3>
//         <div>
//           {selections.fabric && (
//             <div>
//               <h4>Fabric</h4>
//               <img
//                 src={getImageSrc("fabric", selections.fabric)}
//                 alt="Fabric"
//                 style={{ width: "300px", height: "auto" }}
//               />
//             </div>
//           )}
//           {selections.lapel_width && (
//             <div>
//               <h4>Lapel Width</h4>
//               <img
//                 src={getImageSrc("lapel_width", selections.lapel_width)}
//                 alt="Lapel Width"
//                 style={{ width: "300px", height: "auto" }}
//               />
//             </div>
//           )}
//           {selections.pocket && (
//             <div>
//               <h4>Pocket</h4>
//               <img
//                 src={getImageSrc("pocket", selections.pocket)}
//                 alt="Pocket"
//                 style={{ width: "300px", height: "auto" }}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuitCustomizer;
