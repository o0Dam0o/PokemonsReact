import { useState, useContext } from "react";
import { SearchContex } from "../context/SearchContex";
const SearchBar = () => {
	const { getSearch } = useContext(SearchContex);
	const [search, setSearch] = useState("");

	const onChange = (e) => {
		setSearch(e.target.value);
	};
	return (
		<div className="d-flex" role="search">
			<input
				onChange={onChange}
				className="form-control me-2"
				type="search"
				placeholder="Buscar Pokemons.."
				aria-label="Search"
			/>
			<button
				className="btn btn-danger"
				onClick={
					search.length === 0 ? getSearch(search) : () => getSearch(search)
				}
				type="submit"
			>
				Buscar
			</button>
		</div>
	);
};
export default SearchBar;
