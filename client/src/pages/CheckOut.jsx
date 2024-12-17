import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelectedData } from "../context/SelectedData";
import { useCart } from "../context/cartContext";
import ShowDetails from "../components/ShowDetails";
import { useUserSession } from "../Hooks/useUserSession";
import { loadStripe } from "@stripe/stripe-js";

const CheckOut = () => {
	const { setSelectedData } = useSelectedData();
	const { user, loading } = useUserSession();
	const { totalAmount, clearCart, calculateItemTotal, calculateItemQuantity, items } = useCart();
	const navigate = useNavigate();

	console.log("user", user);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: user?.name ?? "",
			email: user?.email || "",
			address: "",
			phone: "",
		},
	});

	const handleStripePayment = async () => {
		const stripe = await loadStripe(
			"pk_test_51PjcnfKf9wCY0IEjHeDfSaCQVnmuKvyvNDtHsOb0kIaFc9lMNhVLUDqmRF9JQPNYWxuF0EZUfSANZdDjmTYz8VeU00BiJPBDz2",
		);

		const response = await fetch("http://localhost:4000/checkout/6761ac46a97484af8856545d", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				quantity: 2,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log("Data:", data);
	};

	const onSubmit = async (formData) => {
		try {
			const response = await fetch(" http://localhost:4000/suites", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...formData,
					selectedItems: items.map((item) => ({
						...item,
						price: calculateItemTotal(item),
					})),
				}),
			});

			const savedUserData = await response.json();

			if (response.status === 201) {
				setSelectedData([]);
				clearCart();
				navigate("/welcome", {
					state: {
						savedData: savedUserData,
						message: "Your order has been placed successfully.",
					},
				});
			}
		} catch (error) {
			console.error("Error creating suites:", error);
			setSelectedData([]);
			clearCart();
		}
	};

	return (
		<div className="max-w-7xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
			<h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Checkout</h1>
			<div className="grid md:grid-cols-2 gap-8">
				<div className="bg-white p-6 rounded-lg shadow space-y-4">
					<h2 className="text-2xl font-semibold mb-6 text-gray-700">Customer Details</h2>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700">
								Name
							</label>
							<input
								type="text"
								id="name"
								{...register("name", {
									required: "Name is required",
								})}
								placeholder="Enter your name"
								className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							/>
							{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								id="email"
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Invalid email address",
									},
								})}
								placeholder="Enter your email"
								className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							/>
							{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
						</div>

						<div>
							<label htmlFor="address" className="block text-sm font-medium text-gray-700">
								Address
							</label>
							<textarea
								id="address"
								{...register("address", {
									required: "Address is required",
									minLength: {
										value: 10,
										message: "Address must be at least 10 characters",
									},
								})}
								placeholder="Enter your address"
								className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								rows={3}
							/>
							{errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
						</div>

						<div>
							<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
								Phone
							</label>
							<input
								type="tel"
								id="phone"
								{...register("phone", {
									required: "Phone number is required",
									pattern: {
										value: /^[0-9]{10}$/,
										message: "Phone number must be 10 digits",
									},
								})}
								placeholder="Enter your phone number"
								className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							/>
							{errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
						</div>

						<button
							type="submit"
							className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
							Place Order
						</button>
					</form>
					<button
						onClick={handleStripePayment}
						className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
						Pay with Stripe
					</button>
				</div>
				<ShowDetails
					selectedData={items}
					totalAmount={totalAmount}
					calculateItemQuantity={calculateItemQuantity}
					calculateItemTotal={calculateItemTotal}
				/>
			</div>
		</div>
	);
};

export default CheckOut;
