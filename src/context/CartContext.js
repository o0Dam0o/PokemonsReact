import { createContext, useContext, useState } from "react";
import { NotifiacionContex } from "./NotificacionContext";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const { setNotification } = useContext(NotifiacionContex);
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
	const getDelete = (id) => {
		const index = cart.findIndex((e) => e.id === id);
		setNotification(
			"error",
			`Se elimino a ${cart[index].name.toUpperCase()} del Carrito`
		);
		cart.splice(index, 1);
		setCart([...cart]);
	};
	const getDeleteAll = () => {
		setNotification("error", `Se Eliminaron todos los Productos`);
		setCart([]);
	};
	const getTotalFinal = () => {
		let acum = 0;
		cart.forEach((a) => {
			acum += a.price * a.count;
		});
		return acum;
	};
	return (
		<CartContext.Provider
			value={{
				addCart,
				getToltalProductos,
				initial,
				cart,
				getDeleteAll,
				getDelete,
				getTotalFinal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export default CartContextProvider;
