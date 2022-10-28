import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addCart = (pokemon) => {
		if (!InCart(pokemon)) {
			setCart([...cart, pokemon]);
		} else {
			const index = cart.findIndex((e) => e.id === pokemon.id);
			initial(cart[index].count);
			if (pokemon.count === 0) {
				cart.splice(index, 1);
				setCart([...cart]);
			} else {
				cart[index].count = pokemon.count;
				setCart([...cart]);
			}
		}
	};
	const initial = (pokemon) => {
		const newCount = cart.findIndex((e) => e.id === pokemon.id);
		return cart[newCount]?.count;
	};
	const InCart = (pokemon) => {
		return cart.some((p) => p.id === pokemon.id);
	};
	const getToltalProductos = () => {
		const total = cart.reduce((a, e) => a + e.count, 0);
		return total;
	};
	return (
		<CartContext.Provider value={{ addCart, getToltalProductos, initial }}>
			{children}
		</CartContext.Provider>
	);
};
export default CartContextProvider;
