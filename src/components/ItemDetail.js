import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import PokemonNot from "../components/Navbar/assets/pokemon-desconocido.png";
import Items from "./Items";
import { getProducts } from "../services/firestore";
const ItemDetail = () => {
	const { typeId } = useParams();
	const location = useLocation();
	const [type, setType] = useState({});
	const [loading, setLoading] = useState(true);
	const search = location.pathname === "/legendarios" ? "legend" : typeId;
	useEffect(() => {
		setLoading(true);
		getProducts("pokemon", search)
			.then((res) => {
				setType(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [typeId]);
	if (loading) {
		return (
			<div className="position-absolute top-50 start-50 translate-middle">
				<div className="spinner-border text-danger " role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}
	if (type.length === 0) {
		return (
			<div
				className="d-flex flex-column justify-content-center align-items-center"
				style={{ height: "75vh" }}
			>
				<h3 className="my-3">
					No se encontro ningun pokemon Tipo : {typeId.toUpperCase()}
				</h3>
				<img src={PokemonNot} alt="Pokemon desconocido" height={350} />
			</div>
		);
	}
	return (
		<>
			<h2 className="d-flex justify-content-center my-2">
				{!typeId ? "LEGENDARIOS" : typeId.toUpperCase()}
			</h2>
			<div className="d-flex flex-wrap justify-content-center mx-5 alingn-items-center">
				{type.map((pokemons, i) => (
					<Items key={i} pokemons={pokemons} />
				))}
			</div>
		</>
	);
};
export default ItemDetail;
