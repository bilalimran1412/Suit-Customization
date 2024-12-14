import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);

	const updateTotals = (items) => {
		const quantity = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
		const totalAmount = items.reduce((sum, item) => {
			const rawPrice = String(item.price).replace(/[^0-9.]/g, "");
			const price = Number(rawPrice) || 0;
			return sum + price * (item.quantity || 0);
		}, 0);

		setTotalQuantity(quantity || 0);
		setTotalAmount(Number(totalAmount.toFixed(2)));
	};

	const addToCart = (newItem) => {
		setItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === newItem.id);

			const updatedItems = existingItem
				? prevItems.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item))
				: [...prevItems, { ...newItem, quantity: 1 }];
			updateTotals(updatedItems);
			return updatedItems;
		});
	};

	const removeFromCart = (itemId) => {
		setItems((prevItems) => {
			const updatedItems = prevItems.filter((item) => item.id !== itemId);
			updateTotals(updatedItems);
			return updatedItems;
		});
	};

	const handleDecrease = (item) => {
		setItems((prevItems) => {
			const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

			if (existingItem && existingItem.quantity > 1 ) {
				const updatedItems = prevItems.map((cartItem) =>
					cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
				);
				updateTotals(updatedItems);
				return updatedItems;
			}

      return prevItems;
		});
	};

  const calculateItemTotal = (Newitem) => {
    const rawPrice = String(Newitem.price).replace(/[^0-9.]/g, "");
    const quantity = items.find(item => item.id === Newitem.id).quantity || 0;
    return Number((rawPrice * quantity).toFixed(2));
  };

  const calculateItemQuantity = (Newitem) => {

    const quantity = items.find(item => item.id === Newitem.id).quantity || 0;
    return Number(quantity);
    };

	const clearCart = () => {
		setItems([]);
		setTotalQuantity(0);
		setTotalAmount(0);
	};

	return (
		<CartContext.Provider
			value={{
				items,
				totalQuantity,
				handleDecrease,
				totalAmount,
        calculateItemTotal,
				addToCart,
        calculateItemQuantity,
				removeFromCart,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
