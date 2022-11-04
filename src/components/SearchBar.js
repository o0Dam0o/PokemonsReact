import { useSearchParams } from "react-router-dom";
const SearchBar = () => {
	const [search, setSearch] = useSearchParams("");

	const onChange = (e) => {
		e.preventDefault();
		const a = e.target.value;
		setSearch({ pokemon: a });
	};
	const onClick = () => {
		console.log(search.get("pokemon"));
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
