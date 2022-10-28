import { getPokemons, getPokemonsAll, getSearch } from "../asyncMock";
import { useState, useEffect, useContext } from "react";
import { SearchContex } from "../context/SearchContex";
import { useParams } from "react-router-dom";
import PokemonNot from "./Navbar/assets/pokemon-desconocido.png";
import Pagination from "./Pagination";
import ItemList from "./ItemList";

const ItemListContainer = () => {
	const { pokedexId } = useParams();
	const { getEncontrado } = useContext(SearchContex);
	const [loading, setLoading] = useState(false);
	const [not, setNot] = useState(false);
	const [pokemons, setPokemons] = useState([]);
	const [paginaTotal, setPaginaTotal] = useState(0);
	const [pagina, setPagina] = useState(0);
	const getFetch = async () => {
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
	};

	useEffect(() => {
		getFetch();
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
			<Pagination
				pagina={pagina}
				paginaTotal={paginaTotal}
				setPagina={setPagina}
				pokedexId={pokedexId}
			/>

			<div className="d-flex flex-column align-items-center ">
				<div className="d-flex flex-wrap justify-content-center mx-5 alingn-items-center">
					{<ItemList pokemons={pokemons} />}
				</div>
			</div>
		</>
	);
};
export default ItemListContainer;
