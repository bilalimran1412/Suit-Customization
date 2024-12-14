import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const [suites, setSuites] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchSuites = async () => {
			try {
				setLoading(true);
				const response = await fetch("http://localhost:3000/api/getSuitesByUser", {
					method: "GET",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (!response.status === 200) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();

				setSuites(data);
			} catch (err) {
				console.error("Failed to fetch suites:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchSuites();
	}, []);

	if (loading) {
		return <div className="flex items-center justify-center h-screen">Loading...</div>;
	}

	if (error) {
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<p className="text-red-500">Error: {error}</p>
				<button onClick={() => navigate("/")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
					Go Home
				</button>
			</div>
		);
	}
	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-8">Your Orders</h1>
			<div className="space-y-6">
				{suites.map((suite) => (
					<OrderCard key={suite._id} suite={suite} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;

const OrderCard = ({ suite }) => {
	return (
		<div className="bg-white shadow-lg rounded-lg p-6 mb-6">
			<div className="border-b pb-4 mb-4">
				<h2 className="text-2xl font-bold text-gray-800">{suite.style}</h2>
				<p className="text-lg text-gray-600">Price: ${suite.price}</p>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				<div>
					<h3 className="font-semibold text-lg mb-3">Main Features</h3>
					<div className="space-y-2">
						<p>
							<span className="font-medium">Fabric:</span> {suite.febricaSelection}
						</p>
						<p>
							<span className="font-medium">Lapel Style:</span> {suite.lapelStyle}
						</p>
						<p>
							<span className="font-medium">Lapel Width:</span> {suite.j17lapelWidth}
						</p>
						<p>
							<span className="font-medium">Pocket Style:</span> {suite.pocketStyle}
						</p>
					</div>
				</div>

				{/* Stitching Details */}
				<div>
					<h3 className="font-semibold text-lg mb-3">Stitching Details</h3>
					<div className="space-y-2">
						<p>
							<span className="font-medium">Type:</span> {suite.typesOfTheStitching}
						</p>
						<p>
							<span className="font-medium">Outside Edge:</span> {suite.Outsidedecorativestitchingedge}
						</p>
						<p>
							<span className="font-medium">Label Color:</span> {suite.StitchingLabelColor}
						</p>
					</div>
				</div>

				{/* Button Details */}
				<div>
					<h3 className="font-semibold text-lg mb-3">Button Configuration</h3>
					<div className="space-y-2">
						<p>
							<span className="font-medium">Position:</span> {suite.positionOfbuttons}
						</p>
						<p>
							<span className="font-medium">Sleeve Buttons:</span> {suite.sleeveButtonPositions}
						</p>
						<p>
							<span className="font-medium">Buttonhole Color:</span> {suite.lapelbuttonwholecolor}
						</p>
					</div>
				</div>

				{/* Additional Features */}
				<div>
					<h3 className="font-semibold text-lg mb-3">Additional Features</h3>
					<div className="space-y-2">
						<p>
							<span className="font-medium">Inside Pockets:</span> {suite.j25insidePockets}
						</p>
						<p>
							<span className="font-medium">Elbow Patches:</span> {suite.elbowPatches}
						</p>
						<p>
							<span className="font-medium">Sweat Piece:</span> {suite.SweatPiece}
						</p>
					</div>
				</div>
			</div>

			<div className="mt-6 flex justify-between items-center border-t pt-4">
				<p className="text-sm text-gray-500">Order Date: {new Date(suite.timestamp).toLocaleDateString()}</p>
				<span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">Quantity: {suite.quantity}</span>
			</div>
		</div>
	);
};
