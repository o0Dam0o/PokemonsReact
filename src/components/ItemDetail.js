import { useParams } from "react-router-dom";
import PokemonNot from "../components/Navbar/assets/pokemon-desconocido.png";
import Items from "./Items";
import { getProducts } from "../services/firestore";
import { useAsync } from "../hooks/useAsync";
const ItemDetail = () => {
	const { typeId } = useParams();
	const search = typeId === undefined ? "legend" : typeId;
	const { data: type, loading } = useAsync(
		() => getProducts(search),
		[typeId, search]
	);
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
