import { useState } from "react";
const ItemCount = ({ pokemon, stock, initial }) => {
	const [count, setState] = useState(initial);
	const decrement = () => {
		count > 1 && setState(count - 1);
	};

	const increment = () => {
		count < stock && setState(count + 1);
	};
	const onAdd = () => {
		count !== 0
			? console.log(`Se agregaron ${count} de ${pokemon.name}`)
			: console.log(`No se puede agregar ${count}/unidades de ${pokemon.name}`);
	};

	return (
		<div className="bg-light w-25 mx-5 d-flex flex-column justify-content-around align-items-center">
			<div className="">
				<div className="d-flex">
					<button onClick={decrement} type="button" className="btn btn-light">
						-
					</button>
					<h2 className="mx-4 ">{count}</h2>
					<button onClick={increment} type="button" className="btn btn-light">
						+
					</button>
				</div>
				<div className="d-flex justify-content-center">Stock {stock}</div>
			</div>
			<div>
				<button
					onClick={onAdd}
					type="button"
					className="btn btn-dark"
					disabled={stock === 0 && true}
				>
					{stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
				</button>
			</div>
		</div>
	);
};
export default ItemCount;
