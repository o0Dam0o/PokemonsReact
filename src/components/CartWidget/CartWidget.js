import cart from "./assets/poke-cart.svg";
const CartWidget = () => {
	return (
		<div>
			<img src={cart} alt="carrito" style={{ height: 30 }} />
		</div>
	);
};
export default CartWidget;
