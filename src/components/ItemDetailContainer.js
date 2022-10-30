import { getType, getPokemons, colorTipos } from "../asyncMock";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	collection,
	getDocs,
	query,
	where,
	getCountFromServer,
} from "firebase/firestore";
import { db } from "../services/firebase";
const ItemDetailContainer = ({ type }) => {
	const [types, setTypes] = useState({});
	const [loading, setLoading] = useState(false);
	const collectionRef = collection(db, "types");
	const getFetch = async () => {
		try {
			setLoading(false);
			const res = await getDocs(collectionRef);

			const data = res.docs.map((doc) => {
				const docData = doc.data();
				return { idFirebase: doc.id, ...docData };
			});
			/* const res = await getType(type);
			const data = await Promise.all(
				res.results.map((t) => {
					return getPokemons(t.url);
				})
			); */
			setTypes(data);
		} catch (error) {
			console.log.le("no hay nada");
		} finally {
			setTimeout(() => {
				setLoading(true);
			}, 500);
		}
	};
	console.log(types);
	useEffect(() => {
		getFetch();
	}, []);
	if (!loading) {
		return (
			<div className="position-absolute top-50 start-50 translate-middle">
				<div className="spinner-border text-danger " role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	return (
		<div className="d-flex flex-column align-items-center my-3">
			<h3>Tipos de Pokemon</h3>
			<div className="d-flex flex-wrap justify-content-center mt-3">
				{types.map((t, i) => {
					return (
						<div
							className="card mb-2 m-2"
							key={i}
							style={{
								background: `radial-gradient(${colorTipos.default} 33%, ${
									colorTipos[t.slug]
								} 33%)0% 0% /5px 5px`,
								padding: "0 30px",
								width: "25%",
								height: "15%",
							}}
						>
							<Link to={t.slug} style={{ textDecoration: "none" }}>
								<div className="card-body d-flex flex-column align-items-center">
									<h2 className="card-title text-light">{t.label}</h2>
									<p className="card-text ">
										<small className="text-muted border bg-light rounded-start">
											Pokemons: {"t.count"}
										</small>
									</p>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ItemDetailContainer;
