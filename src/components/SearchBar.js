import { useState, useContext } from "react";
import { SearchContex } from "../context/SearchContex";
import { useLocation, useSearchParams } from "react-router-dom";
const SearchBar = () => {
	const { getSearch, searchs } = useContext(SearchContex);
	const local = useLocation().pathname;
	const [searchParams, setSearchParams] = useSearchParams();

	const onChange = (e) => {
		e.preventDefault();
		if (e.target.value === "") {
			setSearchParams("");
		} else {
			setSearchParams({ pokemon: e.target.value });
		}
	};
	console.log(local);
	return (
		<div className="d-flex" role="search">
			<input
				onChange={onChange}
				value={searchParams.get("pokemon") ?? ""}
				className="form-control me-2"
				type="search"
				placeholder="Buscar Pokemons.."
				aria-label="Search"
			/>
			<button
				className="btn btn-danger"
				onClick={() => getSearch(searchParams.get("pokemon") ?? "")}
				type="submit"
			>
				Buscar
			</button>
		</div>
	);
};
export default SearchBar;
