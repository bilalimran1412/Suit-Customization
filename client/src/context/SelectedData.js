import React, { createContext, useContext, useState } from "react";

const SelectedDataContext = createContext();

export const SelectedDataProvider = ({ children }) => {
	const [selectedData, setSelectedData] = useState(null);

	const handleSelectData = (newSelection) => {
		// Remove null or undefined values
		const cleanSelection = Object.fromEntries(Object.entries(newSelection).filter(([_, value]) => value !== null));

		// Replace the entire previous selection with the new one
		setSelectedData({
			...cleanSelection,
		});
	};

	return (
		<SelectedDataContext.Provider
			value={{
				selectedData,
				setSelectedData,
				handleSelectData,
			}}>
			{children}
		</SelectedDataContext.Provider>
	);
};

export const useSelectedData = () => {
	const context = useContext(SelectedDataContext);
	if (!context) {
		throw new Error("useSelectedData must be used within SelectedDataProvider");
	}
	return context;
};
