import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PokemonNot from "./Navbar/assets/pokemon-desconocido.png";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
const Cart = () => {
	const { cart, getDelete, getDeleteAll, getTotalFinal } =
		useContext(CartContext);
	const total = getTotalFinal();
	if (cart.length === 0) {
		return (
			<div
				className="d-flex flex-column justify-content-center align-items-center"
				style={{ height: "75vh" }}
			>
				<h3 className="my-3 h3">No se encontro ningun pokemon en el Carrito</h3>
				<img src={PokemonNot} alt="Pokemon desconocido" height={350} />
			</div>
		);
	}

	return (
		<div style={{ margin: "1% 25%" }}>
			<table
				className="table align-middle"
				style={{ border: "1px dashed black" }}
			>
				<thead className="table-dark h5">
					<tr>
						<th scope="col">Pokemon</th>
						<th scope="col">Precio</th>
						<th scope="col">Catidad</th>
						<th scope="col">SubTotal</th>
					</tr>
				</thead>
				{cart.map((pokemon) => (
					<CartItem pokemon={pokemon} getDelete={getDelete} key={pokemon.id} />
				))}
			</table>
			<div className="d-flex justify-content-between">
				<p className="h3">Total ${total}</p>
				<Link
					to="/checkout"
					className="btn btn-secondary"
					style={{ textDecoration: "none" }}
				>
					Checkout
				</Link>
				<button
					type="button"
					className="btn btn-outline-danger"
					onClick={() => getDeleteAll()}
				>
					Eliminar Todo
				</button>
			</div>
		</div>
	);
};
export default Cart;
