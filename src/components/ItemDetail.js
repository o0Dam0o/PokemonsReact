import { useState, useEffect } from "react";
import { getType, getPokemons, getSearch } from "../asyncMock";
import { useParams } from "react-router-dom";
import PokemonNot from "../components/Navbar/assets/pokemon-desconocido.png";
import Items from "./Items";
import { db } from "../services/firebase";
import {
	getDocs,
	collection,
	query,
	where,
	getCountFromServer,
} from "firebase/firestore";
const ItemDetail = ({ legends }) => {
	const { typeId } = useParams();
	const [type, setType] = useState({});
	const [loading, setLoading] = useState(false);
	const collectionRef = collection(db, "pokemon");

	const getFetch = async () => {
		try {
			setLoading(false);
			const typesRef = query(
				collectionRef,
				where("tipos", "array-contains", typeId)
			);
			const res = await getDocs(typesRef);
			const data = res.docs.map((doc) => {
				const docData = doc.data();

				return { idFirebase: doc.id, ...docData };
			});
			setType(data);

			/* if (Array.isArray(legends)) {
				const data = await Promise.all(
					legends.map((t) => {
						return getSearch(t);
					})
				);
				setType(data);
			} else {
				const res = await getType(`type/${typeId}`);
				const data = await Promise.all(
					res.pokemon.map((t) => {
						return getPokemons(t.pokemon.url);
					})
				);
				setType(data);
			} */
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				setLoading(true);
			}, 800);
		}
	};
	useEffect(() => {
		getFetch();
	}, [typeId]);
	if (!loading) {
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
				{typeId.toUpperCase()}
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
