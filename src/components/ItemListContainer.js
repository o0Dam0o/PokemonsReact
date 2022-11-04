import { getProducts } from "../services/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import ItemList from "./ItemList";

const ItemListContainer = () => {
	const { pokedexId } = useParams(1);
	const [loading, setLoading] = useState(false);
	const [pokemons, setPokemons] = useState([]);
	const [paginaTotal, setPaginaTotal] = useState(0);
	const paginas = 25 * (!pokedexId ? 1 : pokedexId);
	useEffect(() => {
		setLoading(true);
		getProducts()
			.then((res) => {
				setPaginaTotal(Math.ceil(res.length / 25));
				setPokemons(res.slice(!pokedexId ? 0 : paginas - 25, paginas));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [pokedexId, paginas]);

	if (loading) {
		return (
			<div className="position-absolute top-50 start-50 translate-middle">
				<div className="spinner-border text-danger " role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	return (
		<>
			<Pagination paginaTotal={paginaTotal} pokedexId={pokedexId} />

			<div className="d-flex flex-column align-items-center ">
				<div className="d-flex flex-wrap justify-content-center mx-5 alingn-items-center">
					{<ItemList pokemons={pokemons} />}
				</div>
			</div>
		</>
	);
};
export default ItemListContainer;
