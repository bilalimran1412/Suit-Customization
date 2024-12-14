import React from "react";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

const CartComponent = () => {
	const {
		items: cartItems,
		totalQuantity,
		totalAmount,
		addToCart,
		handleDecrease,
		removeFromCart,
		calculateItemTotal,
	} = useCart();
	const navigate = useNavigate();



  console.log(cartItems)

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="bg-white border border-gray-600  rounded-3xl overflow-hidden">
				<div className="bg-gray-600 px-6 py-4 flex justify-between items-center">
					<h2 className="text-3xl font-extrabold text-white flex items-center">
						<ShoppingBag className="mr-2" />
						Cart
					</h2>
					<span className="text-xl font-semibold text-white">Items: {totalQuantity}</span>
				</div>

				{cartItems.length === 0 ? (
					<div className="text-center py-20">
						<p className="text-gray-500 text-2xl font-light">
							Your cart is as empty
							<button onClick={() => navigate("/")}>Continue Shopping</button>
						</p>
					</div>
				) : (
					<div>
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="flex items-center justify-between p-6 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 ease-in-out">
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-black">{item.febricaSelection}</h3>
									<p className="text-gray-600 mt-1 font-medium">{item.price}</p>
								</div>

								<div className="flex items-center space-x-6">
									<div className="flex items-center space-x-2">
										<button
											onClick={() => handleDecrease(item)}
											className="p-2 text-black hover:text-white hover:bg-black rounded-full transition-all duration-300">
											<Minus className="w-5 h-5" />
										</button>
										<span className="w-8 text-center text-black font-semibold">{item.quantity}</span>
										<button
											onClick={() => addToCart(item)}
											className="p-2 text-black hover:text-white hover:bg-black rounded-full transition-all duration-300">
											<Plus className="w-5 h-5" />
										</button>
									</div>

									<div className="w-24 text-right">
										<p className="text-gray-800 text-xl font-bold">${calculateItemTotal(item)}</p>
									</div>

									<button
										onClick={() => removeFromCart(item.id)}
										className="p-2 text-red-500 hover:text-white hover:bg-red-500 rounded-full transition-all duration-300 ml-4">
										<Trash2 className="w-5 h-5" />
									</button>
								</div>
							</div>
						))}

						<div className="p-6 bg-gray-50">
							<div className="flex justify-between items-center">
								<div>
									<p className="text-gray-600 text-lg">Total Amount:</p>
									<p className="text-xl font-bold text-black mt-1">${totalAmount.toFixed(2)}</p>
								</div>
								<button
									onClick={() => navigate("/checkout")}
									className="bg-gray-700 text-white p-4 rounded-full text-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg flex items-center">
									<ShoppingBag className="mr-2" />
									Proceed to Checkout
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartComponent;
