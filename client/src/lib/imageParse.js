import { imageLayers } from "../components/newImageLayer";

export function getImagesBySelection(selection) {
	const { febricaSelection, style, lapelStyle, lapelWidth, pocketStyle } = selection;

	// Find the selected fabric
	const fabricLayer = imageLayers.find((layer) => layer.febric === febricaSelection);
	if (!fabricLayer) {
		console.error("Fabric not found");
		return [];
	}

	// Find the selected style
	const selectedStyle = fabricLayer.style[style];
	if (!selectedStyle) {
		console.error("Style not found");
		return [];
	}

	// Start with default images
	let images = [...(selectedStyle.defaultImages || [])];

	// If lapel style is selected, add its images
	if (lapelStyle) {
		const lapelImages = selectedStyle.lapelStyle[lapelStyle]?.default || [];
		images.push(...lapelImages);

		// If lapel width is selected, add its images
		if (lapelWidth) {
			const widthImages = selectedStyle.lapelStyle[lapelStyle]?.lapelWidth[lapelWidth] || [];
			images.push(...widthImages);
		}
	}

	// If pocket style is selected, add its images
	if (pocketStyle) {
		const pocketImages = selectedStyle.PocketStyle[pocketStyle] || [];
		images.push(...pocketImages);
	}

	// Remove duplicate images
	images = [...new Set(images)];

	return images;
}
