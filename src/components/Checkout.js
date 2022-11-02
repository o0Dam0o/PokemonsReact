import { useState } from "react";

const Checkout = () => {
	const [order, setOrder] = useState({});
	const getForm = (event) => {
		event.preventDefault();
		const name = event.target.nombre.value;
		const celular = event.target.celular.value;
		const email = event.target.email.value;
		const direccion = event.target.direccion.value;
		const localidad = event.target.localidad.value;
		const provincia = event.target.provincia.value;
		const cp = event.target.cp.value;
		setOrder({
			name: name,
			celular: celular,
			email: email,
			direccion: direccion,
			localidad: localidad,
			provincia: provincia,
			cp: cp,
		});
	};
	console.log(order);
	return (
		<div className="container d-flex flex-column align-items-center">
			<p className="h3 my-xxl-5">Checkout</p>
			<form className="row g-3 border p-3" onSubmit={getForm}>
				<div className="col-md-6">
					<label className="form-label">Nombre Completo</label>
					<input
						type="text"
						class="form-control"
						aria-label="Nombre"
						name="nombre"
					/>
				</div>
				<div className="col-md-6">
					<label className="form-label">Numero Celular</label>
					<input
						type="number"
						className="form-control"
						id="inputNumero"
						name="celular"
					/>
				</div>
				<div className="col-12">
					<label class="form-label">Email</label>
					<input
						type="email"
						class="form-control"
						id="inputEmail"
						name="email"
					/>
				</div>
				<div className="col-12">
					<label className="form-label">Direccion</label>
					<input
						type="text"
						className="form-control"
						id="inputDireccion"
						placeholder="Departameto, calle,numero etc"
						name="direccion"
					/>
				</div>
				<div className="col-md-6">
					<label className="form-label">Localidad</label>
					<input
						type="text"
						className="form-control"
						id="inputLocalidad"
						name="localidad"
					/>
				</div>
				<div className="col-md-4">
					<label className="form-label">Provincia</label>
					<select id="inputState" className="form-select" name="provincia">
						<option selected>Buenos Aires</option>
						<option>Cordoba</option>
						<option>Santa Fe</option>
						<option>Mendoza</option>
					</select>
				</div>
				<div className="col-md-2">
					<label className="form-label">Codigo Postal</label>
					<input type="text" className="form-control" id="inputZip" name="cp" />
				</div>
				<div className="col-12">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="gridCheck"
						/>
						<label className="form-check-label">Recordar</label>
					</div>
				</div>
				<div className=" d-flex col-12 justify-content-center">
					<button
						type="submit"
						className="btn btn-danger justify-content-center"
					>
						Finalizar Compra
					</button>
				</div>
			</form>
		</div>
	);
};
export default Checkout;
