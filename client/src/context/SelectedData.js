import React, { createContext, useContext, useState } from "react";

const SelectedDataContext = createContext();

export const SelectedDataProvider = ({ children }) => {
	const [selectedData, setSelectedData] = useState("");

	const handleSelectData = (newSelection) => {
		// Remove null or undefined values

		// Replace the entire previous selection with the new one
		setSelectedData({
			...newSelection,
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
