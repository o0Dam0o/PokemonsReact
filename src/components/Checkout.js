import { useState } from "react";

const Checkout = () => {
	const [order, setOrder] = useState({});
	const onClick = (event) => {
		event.preventDefault();
		console.log(order);
	};
	console.log(order);

	return (
		<div className="container d-flex flex-column align-items-center">
			<p className="h3 my-xxl-5">Checkout</p>
			<form className="row g-3 border p-3">
				<div className="col-md-6">
					<label for="Firstname" className="form-label">
						Nombre Completo
					</label>
					<input
						type="text"
						class="form-control"
						aria-label="Nombre"
						nombre={(e) => {
							const a = e.target.value;
							setOrder(a);
						}}
					/>
				</div>
				<div className="col-md-6">
					<label for="inputPassword4" className="form-label">
						Numero Celular
					</label>
					<input
						type="number"
						className="form-control"
						id="inputNumero"
						Numero={(e) => e.target.value}
					/>
				</div>
				<div className="col-12">
					<label for="inputEmail4" class="form-label">
						Email
					</label>
					<input
						type="email"
						class="form-control"
						id="inputEmail"
						Email={(e) => e.target.value}
					/>
				</div>
				<div className="col-12">
					<label for="inputAddress2" className="form-label">
						Direccion
					</label>
					<input
						type="text"
						className="form-control"
						id="inputDireccion"
						placeholder="Departameto, calle,numero etc"
						Direccion={(e) => e.target.value}
					/>
				</div>
				<div className="col-md-6">
					<label for="inputCity" className="form-label">
						Localidad
					</label>
					<input
						type="text"
						className="form-control"
						id="inputLocalidad"
						Localidad={(e) => e.target.value}
					/>
				</div>
				<div className="col-md-4">
					<label for="inputState" className="form-label">
						Provincia
					</label>
					<select
						id="inputState"
						className="form-select"
						Provincia={(e) => e.target.value}
					>
						<option selected>Buenos Aires</option>
						<option>Cordoba</option>
						<option>Santa Fe</option>
						<option>Mendoza</option>
					</select>
				</div>
				<div className="col-md-2">
					<label for="inputZip" className="form-label">
						Codigo Postal
					</label>
					<input type="text" className="form-control" id="inputZip" />
				</div>
				<div className="col-12">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="gridCheck"
						/>
						<label className="form-check-label" for="gridCheck">
							Recordar
						</label>
					</div>
				</div>
				<div className=" d-flex col-12 justify-content-center">
					<button
						type="buton"
						className="btn btn-danger justify-content-center"
						onClick={onClick}
					>
						Finalizar Compra
					</button>
				</div>
			</form>
		</div>
	);
};
export default Checkout;
