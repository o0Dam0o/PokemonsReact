const Pagination = ({ pagina, setPagina, paginaTotal }) => {
	const onClickLeft = () => {
		pagina > 0 && setPagina(pagina - 1);
	};
	const onClickRight = () => {
		pagina < paginaTotal - 1 && setPagina(pagina + 1);
	};

	return (
		<div className="d-flex justify-content-around">
			<h2>Pokedex</h2>
			<div className="d-flex align-items-center">
				<button className="btn btn-danger" onClick={onClickLeft}>
					Previous
				</button>
				<div className="mx-3">
					{pagina + 1} de {paginaTotal}
				</div>
				<button className="btn btn-danger" onClick={onClickRight}>
					Next
				</button>
			</div>
		</div>
	);
};
export default Pagination;
