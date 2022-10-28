/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearch } from "../asyncMock";
import ItemFinal from "./itemFinal";

const Item = () => {
	const [loading, setLoading] = useState(false);
	const [pokemons, setPokemons] = useState({});
	const { pokemonId } = useParams();
	const getFetch = async () => {
		setLoading(false);
		const data = await getSearch(pokemonId);
		setPokemons(data);
	};
	useEffect(() => {
		getFetch();
		setTimeout(() => {
			setLoading(true);
		}, 400);
	}, [pokemonId]);
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
		<div>
			<ItemFinal pokemons={pokemons} />
		</div>
	);
};

export default Item;
