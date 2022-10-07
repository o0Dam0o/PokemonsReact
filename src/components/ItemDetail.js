import { useState, useEffect } from "react";
import { getType, getPokemons } from "../asyncMock";
import { useParams } from "react-router-dom";
import Items from "./Items";
const ItemDetail = () => {
	const { typeId } = useParams();
	const [type, setType] = useState({});
	const [loading, setLoading] = useState(false);
	const getFetch = async () => {
		setLoading(false);
		const res = await getType(`type/${typeId}`);
		const data = await Promise.all(
			res.pokemon.map((t) => {
				return getPokemons(t.pokemon.url);
			})
		);
		setType(data);
	};

	useEffect(() => {
		getFetch();
		setTimeout(() => {
			setLoading(true);
		}, 800);
	}, [typeId]);

	return (
		<div className="d-flex flex-wrap justify-content-center mx-5 alingn-items-center">
			{!loading ? (
				<div className="position-absolute top-50 start-50 translate-middle">
					<div className="spinner-border text-danger " role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				type.map((pokemons, i) => <Items key={i} pokemons={pokemons} />)
			)}
		</div>
	);
};
export default ItemDetail;
