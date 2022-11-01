/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearch } from "../asyncMock";
import { db } from "../services/firebase";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import ItemFinal from "./itemFinal";

const Item = () => {
	const [loading, setLoading] = useState(false);
	const [pokemons, setPokemons] = useState({});
	const { pokemonId } = useParams();
	const getFetch = async () => {
		setLoading(true);
		try {
			const docRef = doc(db, "pokemon", pokemonId);
			const res = await getDoc(docRef);
			const data = res.data();
			const docData = { idFirebase: doc.id, ...data };
			setPokemons(docData);
		} catch (error) {
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 800);
		}
	};
	useEffect(() => {
		getFetch();
	}, [pokemonId]);
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
