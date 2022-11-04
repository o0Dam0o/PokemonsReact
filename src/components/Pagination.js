import { Link } from "react-router-dom";
const Pagination = ({ paginaTotal, pokedexId }) => {
	return (
		<div className="d-flex justify-content-around">
			<h2>Pokedex</h2>
			<div className="d-flex align-items-center">
				<Link
					to={`/pokedex/${
						!pokedexId
							? "/"
							: parseInt(pokedexId) === 1
							? "1"
							: parseInt(pokedexId) - 1
					}`}
					className="btn btn-danger"
				>
					Previous
				</Link>
				<div className="mx-3">
					{!pokedexId ? 1 : pokedexId} de {paginaTotal}
				</div>
				<Link
					to={`/pokedex/${
						!pokedexId
							? 2
							: parseInt(pokedexId) === paginaTotal
							? paginaTotal
							: parseInt(pokedexId) + 1
					}`}
					className="btn btn-danger"
				>
					Next
				</Link>
			</div>
		</div>
	);
};
export default Pagination;
