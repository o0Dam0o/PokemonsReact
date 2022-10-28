import { Link } from "react-router-dom";
const Pagination = ({ pagina, setPagina, paginaTotal, pokedexId }) => {
	const onClickLeft = () => {
		pagina > 0 && setPagina(pagina - 1);
	};
	const onClickRight = () => {
		pagina < paginaTotal && setPagina(pagina + 1);
	};

	return (
		<div className="d-flex justify-content-around">
			<h2>Pokedex</h2>
			<div className="d-flex align-items-center">
				<Link
					to={`/${pagina}`}
					className="btn btn-danger"
					onClick={onClickLeft}
				>
					Previous
				</Link>
				<div className="mx-3">
					{!pokedexId ? 0 : pokedexId} de {paginaTotal - 1}
				</div>
				<Link
					to={`/${pagina + 1}`}
					className="btn btn-danger"
					onClick={onClickRight}
				>
					Next
				</Link>
			</div>
		</div>
	);
};
export default Pagination;
