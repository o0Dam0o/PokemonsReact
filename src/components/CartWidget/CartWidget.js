import cart from "./assets/poke-cart.svg";
import { useCart } from "../../context/CartContext";
const CartWidget = () => {
	const { getToltalProductos } = useCart();
	const total = getToltalProductos();
	return (
		<div
			className={`d-flex align-items-center ${
				total === 0 ? "" : "bg-danger border rounded-pill"
			}`}
		>
			<img src={cart} alt="carrito" style={{ height: 30 }} />
			<div className="mx-1 text-light">{total}</div>
		</div>
	);
};
export default CartWidget;
