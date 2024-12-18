import React, { useState } from "react";
import "../css/Preview.css";
import imageLayers from "./imageLAyer";
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
	const generateKey = () => {
		const options = [];
		if (fabric) options.push(fabric);
		if (style) options.push(style);
		if (lapel) options.push(lapel);
		if (lapelbuttonwholecolor) options.push(lapelbuttonwholecolor);
		if (lapelWidth) options.push(lapelWidth);
		if (fit) options.push(fit);
		if (pockets) options.push(pockets);
		if (sleevebuttons) options.push(sleevebuttons);
		if (pleats) options.push(pleats);

		if (insidePockets) options.push(insidePockets);
		if (waist) options.push(waist);
		if (vest) options.push(vest);
		if (embroidery) options.push(embroidery);
		if (sleeveButtonholesVariant) options.push(sleeveButtonholesVariant);
		if (setSelectedInsideSleeveButtonPosition) options.push(setSelectedInsideSleeveButtonPosition);
		if (typesOfTheStitching) options.push(typesOfTheStitching);
		if (elbowPatches) options.push(elbowPatches);
		if (pocketEnvelopeFlapPosition) options.push(pocketEnvelopeFlapPosition);
		console.log(options.join("-"));
		return options.join("-");
	};

	const selectedImages = imageLayers[generateKey()] || [];

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
					{selectedImages.slice(0, 11).map((src, index) => (
						<img
							key={index}
							src={src}
							alt={`Jacket Layer ${index}`}
							className="suit-layer jacket"
							style={{ zIndex: index + 1 }}
						/>
					))}
				</div>
				<div className="pants-layers">
					{selectedImages.slice(11).map((src, index) => (
						<img
							key={index + 11}
							src={src}
							alt={`Pants Layer ${index}`}
							className="suit-layer pants"
							style={{ zIndex: index + 12 }}
						/>
					))}
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
