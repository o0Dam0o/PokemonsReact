import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const SearchBar = ({ OnSearch }) => {
	const { pokemonID } = useParams();
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value);
	};
	const onClick = (e) => {
		return <Link to={`/pokemon/${pokemonID}`}>{search}</Link>;
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
