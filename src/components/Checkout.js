import { useState, useContext } from "react";
import { NotifiacionContex } from "../context/NotificacionContext";
import { CartContext } from "../context/CartContext";
import {
	getDocs,
	addDoc,
	collection,
	where,
	query,
	writeBatch,
} from "firebase/firestore";
import { db } from "../services/firebase/index";
import { Navigate } from "react-router-dom";

const Checkout = () => {
	const [loading, setLoading] = useState(false);
	const { cart, getTotalFinal, getDeleteAll } = useContext(CartContext);
	const { setNotification } = useContext(NotifiacionContex);
	const total = getTotalFinal();
	const getForm = async (event) => {
		event.preventDefault();
		const order = {
			buyer: {
				nombre: event.target.nombre.value,
				celular: event.target.celular.value,
				email: event.target.email.value,
				direccion: event.target.direccion.value,
				localidad: event.target.localidad.value,
				provincia: event.target.provincia.value,
				cp: event.target.cp.value,
			},
			items: cart,
			total: total,
		};
		setLoading(true);
		try {
			const ids = cart.map((prod) => prod.id);
			const productsRef = collection(db, "pokemon");

			const productsFirestore = await getDocs(
				query(productsRef, where("id", "in", ids))
			);
			const { docs } = productsFirestore;
			const batch = writeBatch(db);
			const outOfStock = [];

			docs.forEach((doc) => {
				const dataDoc = doc.data();
				const stockDb = dataDoc.stock;
				const productCart = cart.find((prod) => prod.id === dataDoc.id);
				console.log(productCart);
				const prodCount = productCart?.count;

				if (stockDb >= prodCount) {
					batch.update(doc.ref, { stock: stockDb - prodCount });
				} else {
					outOfStock.push({ id: doc.id, ...dataDoc });
				}
			});
			if (outOfStock.length === 0) {
				await batch.commit();

				const orderRef = collection(db, "orders");
				const orderAdded = await addDoc(orderRef, order);

				setNotification(
					"success",
					`El Numero de su orden es: ${orderAdded.id}`
				);
				getDeleteAll();
			} else {
				setNotification("error", "Hay productos fuera de stock");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	if (cart.length === 0) {
		return <Navigate to="/" />;
	} else if (loading) {
		return (
			<>
				<div className="position-absolute top-50 start-50 translate-middle">
					<div className="spinner-border text-danger " role="status"></div>
				</div>
				<span className="position-absolute top-50 start-50 translate-middle my-xxl-4">
					Finalizando Orden
				</span>
			</>
		);
	}
	return (
		<div className="container d-flex flex-column align-items-center">
			<p className="h3 my-xxl-5">Checkout</p>
			<form className="row g-3 border p-3" onSubmit={getForm} required>
				<div className="col-md-6">
					<label className="form-label">Nombre Completo</label>
					<input
						type="text"
						class="form-control"
						aria-label="Nombre"
						name="nombre"
						required
					/>
				</div>
				<div className="col-md-6">
					<label className="form-label">Numero Celular</label>
					<input
						type="number"
						className="form-control"
						id="inputNumero"
						name="celular"
						required
					/>
				</div>
				<div className="col-12">
					<label class="form-label">Email</label>
					<input
						type="email"
						class="form-control"
						id="inputEmail"
						name="email"
						required
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
						required
					/>
				</div>
				<div className="col-md-6">
					<label className="form-label">Localidad</label>
					<input
						type="text"
						className="form-control"
						id="inputLocalidad"
						name="localidad"
						required
					/>
				</div>
				<div className="col-md-4">
					<label className="form-label">Provincia</label>
					<select
						id="inputState"
						className="form-select"
						name="provincia"
						required
					>
						<option selected>Buenos Aires</option>
						<option>Cordoba</option>
						<option>Santa Fe</option>
						<option>Mendoza</option>
					</select>
				</div>
				<div className="col-md-2">
					<label className="form-label">Codigo Postal</label>
					<input
						type="text"
						className="form-control"
						id="inputZip"
						name="cp"
						required
					/>
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
