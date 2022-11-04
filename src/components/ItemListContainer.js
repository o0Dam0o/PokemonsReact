import { getProducts } from "../services/firestore";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import ItemList from "./ItemList";
import { useAsync } from "../hooks/useAsync";

const ItemListContainer = () => {
	const { pokedexId } = useParams(1);
	const paginas = 25 * (!pokedexId ? 1 : pokedexId);
	const { data: pokemons, loading } = useAsync(
		() => getProducts(),
		[pokedexId, paginas]
	);
	const paginaTotal = Math.ceil(pokemons?.length / 25);
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
