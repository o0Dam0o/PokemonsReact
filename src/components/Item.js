/* eslint-disable no-undef */
import { useParams } from "react-router-dom";
import { getProduct } from "../services/firestore";
import ItemFinal from "./itemFinal";
import { useAsync } from "../hooks/useAsync";

const Item = () => {
	const { pokemonId } = useParams();
	const { data: pokemons, loading } = useAsync(
		() => getProduct(pokemonId),
		[pokemonId]
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
	return (
		<div>
			<ItemFinal pokemons={pokemons} />
		</div>
	);
};

export default Item;
