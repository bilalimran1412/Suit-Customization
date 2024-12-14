import React from "react";

const ShowDetails = ({ selectedData, totalAmount, calculateItemTotal }) => {
	console.log(selectedData , "selectedData")
	return (
		<div className="mt-6 md:mt-0 md:ml-8 bg-white p-6 rounded-lg shadow">
			<h2 className="text-2xl font-bold mb-4">Selected Items</h2>
			{selectedData.length > 0 ? (
				<div className="space-y-6">
					{selectedData.map((item, index) => (
						<div key={index} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								<div className="col-span-2 md:col-span-3 pb-2 mb-2 border-b">
									<span className="font-medium text-lg">{item.febricaSelection}</span>
								</div>
								<div>
									<span className="font-medium">Style:</span>
									<span className="ml-2">{item.style}</span>
								</div>
								<div>
									<span className="font-medium">Fit:</span>
									<span className="ml-2">{item.fit}</span>
								</div>
								<div>
									<span className="font-medium">Lapel:</span>
									<span className="ml-2">{item.lapel}</span>
								</div>
								<div>
									<span className="font-medium">Lapel Width:</span>
									<span className="ml-2">{item.lapelWidth}</span>
								</div>
								<div className="col-span-2 md:col-span-1">
									<span className="font-medium">Price:</span>
									<span className="ml-2 text-green-600 font-bold">${calculateItemTotal(item)}</span>
								</div>
							</div>
						</div>
					))}
					<div className="flex justify-between items-center pt-4 border-t">
						<span className="text-xl font-medium">Total Amount:</span>
						<span className="text-2xl text-green-600 font-bold">${totalAmount}</span>
					</div>
				</div>
			) : (
				<p className="text-gray-500">No items selected.</p>
			)}
		</div>
	);
};

export default ShowDetails;
