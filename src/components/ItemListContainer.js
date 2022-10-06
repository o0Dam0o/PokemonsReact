import { getPokemons, getPokemonsAll } from "../asyncMock";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import ItemList from "./ItemList";

const ItemListContainer = () => {
	const [loading, setLoading] = useState(false);
	const [pokemons, setPokemons] = useState([]);
	const [paginaTotal, setPaginaTotal] = useState(0);
	const [pagina, setPagina] = useState(0);
	const getFetch = async () => {
		setLoading(true);
		try {
			const res = await getPokemonsAll(25, 25 * pagina);
			const data = await Promise.all(
				res.results.map((p) => {
					return getPokemons(p.url);
				})
			);
			setPaginaTotal(Math.ceil(res.count / 25));
			setPokemons(data);
		} catch (Err) {
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 400);
		}
	};
	useEffect(() => {
		getFetch();
	}, [pagina]);

	return (
		<>
			<Pagination
				pagina={pagina}
				paginaTotal={paginaTotal}
				setPagina={setPagina}
			/>

			<div className="d-flex flex-column align-items-center ">
				<div className="d-flex flex-wrap justify-content-center mx-5 alingn-items-center">
					{loading ? (
						<div className="position-absolute top-50 start-50 translate-middle">
							<div className="spinner-border text-danger " role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
						<ItemList pokemons={pokemons} />
					)}
				</div>
			</div>
		</>
	);
};
export default ItemListContainer;
