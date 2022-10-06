/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearch } from "../asyncMock";
import ItemFinal from "./itemFinal";
export { getSearch } from "../asyncMock";

const Item = () => {
	const [loading, setLoading] = useState(false);
	const [pokemons, setPokemons] = useState({});
	const { pokemonId } = useParams();
	const getFetch = async () => {
		setLoading(false);
		const data = await getSearch(pokemonId);
		setPokemons(data);
	};
	console.log(pokemons);
	useEffect(() => {
		getFetch();
		setTimeout(() => {
			setLoading(true);
		}, 400);
	}, [pokemonId]);
	return (
		<div>
			{loading ? (
				<ItemFinal pokemons={pokemons} />
			) : (
				<div className="position-absolute top-50 start-50 translate-middle">
					<div className="spinner-border text-danger " role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Item;
