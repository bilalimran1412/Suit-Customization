import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Welcome = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const savedData = location.state?.savedData || [];
	const message = location.state?.message || "Welcome!";

	console.log(savedData, "savedData");

	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center">
					<h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Order Confirmation</h1>
					<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">{message}</p>
				</div>

				{savedData.length > 0 && (
					<div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
						<div className="px-4 py-5 sm:px-6">
							<h2 className="text-lg leading-6 font-medium text-gray-900">Order Summary</h2>
							<p className="mt-1 max-w-2xl text-sm text-gray-500">Details of your recent purchase</p>
						</div>
						<div className="border-t border-gray-200">
							<div className="overflow-x-auto">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											{[
													"Febrica Selection",
													"Price",
													"Style",
													"Fit",
													"Mixmatchfabrics",
													"Lapel Width",
													"PocketStyle",
													"Inside Pockets",
													"Sleeve Buttonholes",
													"Sleeve Button Positions",
													"Types of Stitching",
													"Elbow Patches",
													"Embroidery Position",
													"Pocket Envelope Flap Position",
													"Quantity"
											].map((header) => (
												<th
													key={header}
													className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													{header}
												</th>
											))}
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{savedData.map((item, index) => (
											<tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
												<td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
													{item.febricaSelection || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price || "N/A"}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.style || "N/A"}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Mixmatchfabrics || "N/A"}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.lapelStyle || "N/A"}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{item.j17lapelWidth || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.pocketStyle || "N/A"}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{item.j25insidePockets || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{item.sleeveButtonholes || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{item.sleeveButtonPositions || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{item.typesOfTheStitching || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{item.elbowPatches || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{item.Embroideryposition || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{item.pocketEnvelopeFlapPosition || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{item.quantity || "N/A"}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{new Date(item.timestamp).toLocaleString()}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				)}

				<div className="mt-12 text-center">
					<button
						onClick={() => navigate("/")}
						className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
						Continue Shopping
					</button>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
