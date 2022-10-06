import { useState } from "react";
const SearchBar = ({ OnSearch }) => {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value);
		e.target.value.length === 0 && OnSearch(null);
	};
	const onClick = (e) => {
		OnSearch(search.toLowerCase());
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
			<button className="btn btn-danger" onClick={onClick} type="submit">
				Buscar
			</button>
		</div>
	);
};
export default SearchBar;
