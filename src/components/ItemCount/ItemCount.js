import { useState } from "react";
const ItemCount = ({ stock, initial, handleOnAdd }) => {
	const [count, setState] = useState(initial);
	const decrement = () => {
		count > 0 && setState(count - 1);
	};

	const increment = () => {
		count < stock && setState(count + 1);
	};

	return (
		<div className="bg-light w-25 mx-5 d-flex flex-column justify-content-around align-items-center">
			<div className="">
				<div className="d-flex">
					<button onClick={decrement} type="button" className="btn btn-light">
						-
					</button>
					<h2 className="mx-4">{count}</h2>
					<button onClick={increment} type="button" className="btn btn-light">
						+
					</button>
				</div>
				<div className="d-flex justify-content-center my-4">Stock {stock}</div>
			</div>
			<div>
				<button
					onClick={() => handleOnAdd(count)}
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
