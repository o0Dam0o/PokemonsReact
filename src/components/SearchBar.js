//import { useSearchContex } from "../context/SearchContex";
//import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
	/* 	const { getSearch } = useSearchContex();
	const [search, setSearch] = useSearchParams();
	const onChange = (e) => {
		e.preventDefault();
		if (e.target.value === "") {
			getSearch("");
			setSearch("");
		} else {
			setSearch({ pokemon: e.target.value });
		}
	}; */
	return (
		<div className="d-flex" role="search">
			<input
				//onChange={onChange}
				//value={search.get("pokemon") ?? ""}
				className="form-control me-2"
				type="search"
				placeholder="Buscar"
				aria-label="Search"
			/>
			<button
				className="btn btn-danger"
				//onClick={() => getSearch(search.get("pokemon") ?? "")}
				type="submit"
			>
				Buscar
			</button>
		</div>
	);
};
export default SearchBar;
