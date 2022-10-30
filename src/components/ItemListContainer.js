import { getPokemons, getPokemonsAll, getSearch } from "../asyncMock";
import { useState, useEffect, useContext } from "react";
import { SearchContex } from "../context/SearchContex";
import { useParams } from "react-router-dom";
import PokemonNot from "./Navbar/assets/pokemon-desconocido.png";
import Pagination from "./Pagination";
import ItemList from "./ItemList";
import { db } from "../services/firebase";
import {
	getDocs,
	collection,
	query,
	where,
	getCountFromServer,
} from "firebase/firestore";
const ItemListContainer = () => {
	const { pokedexId } = useParams(1);
	const { getEncontrado } = useContext(SearchContex);
	const [loading, setLoading] = useState(false);
	const [not, setNot] = useState(false);
	const [pokemons, setPokemons] = useState([]);
	const [paginaTotal, setPaginaTotal] = useState(0);
	const paginas = 25 * (!pokedexId ? 1 : pokedexId);
	const getFirebase = async () => {
		const collectionRef = collection(db, "pokemon");
		setNot(false);
		setLoading(true);
		try {
			const res = await getDocs(collectionRef);
			/* const a = query(collectionRef, where("tipos", "array-contains", "fairy"));
			const snapshot = await getCountFromServer(a);
			console.log("count: ", snapshot.data().count);
			const b = await getDocs(a);
			console.log(
				b.docs.map((a) => {
					const e = a.data();
					return { ...e };
				})
			); */
			const data = res.docs.map((doc) => {
				const docData = doc.data();

				return { idFirebase: doc.id, ...docData };
			});
			const order = data.sort((a, b) => a.id - b.id);
			setPaginaTotal(Math.ceil(order.length / 25));
			setPokemons(order.slice(!pokedexId ? 0 : paginas - 25, paginas));
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	/* 	const getFetch = async () => {
		setLoading(true);
		setNot(false);
		try {
			if (getEncontrado().length === 0) {
				const res = await getPokemonsAll(25, 25 * pokedexId);
				const data = await Promise.all(
					res.results.map((p) => {
						return getPokemons(p.url);
					})
				);
				setPaginaTotal(Math.ceil(res.count / 25));
				setPokemons(data);
			} else {
				const data = await getSearch(getEncontrado());
				setPokemons([data]);
				setPaginaTotal(1);
			}
		} catch (Err) {
			setNot(true);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 400);
		}
	}; */
	useEffect(() => {
		getFirebase();
	}, [pokedexId, getEncontrado]);

	if (loading) {
		return (
			<div className="position-absolute top-50 start-50 translate-middle">
				<div className="spinner-border text-danger " role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}
	if (not) {
		return (
			<div
				className="d-flex flex-column justify-content-center align-items-center"
				style={{ height: "75vh" }}
			>
				<h3 className="my-3">
					No se encontro ningun pokemon : {getEncontrado()}
				</h3>
				<img src={PokemonNot} alt="Pokemon desconocido" height={350} />
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
