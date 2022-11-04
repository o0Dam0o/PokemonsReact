import { colorTipos } from "../asyncMock";
import { Link } from "react-router-dom";
import { getProducts } from "../services/firestore";
import { useAsync } from "../hooks/useAsync";
const ItemDetailContainer = () => {
	const { data: types, loading } = useAsync(() =>
		getProducts(undefined, "types")
	);
	if (loading) {
		return (
			<div className="position-absolute top-50 start-50 translate-middle">
				<div className="spinner-border text-danger " role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	return (
		<div className="d-flex flex-column align-items-center my-3">
			<h3>Tipos de Pokemon</h3>
			<div className="d-flex flex-wrap justify-content-center mt-3">
				{types.map((t, i) => {
					return (
						<div
							className="card mb-2 m-2"
							key={i}
							style={{
								background: `radial-gradient(${colorTipos.default} 33%, ${
									colorTipos[t.slug]
								} 33%)0% 0% /5px 5px`,
								padding: "0 30px",
								width: "25%",
								height: "15%",
							}}
						>
							<Link to={t.slug} style={{ textDecoration: "none" }}>
								<div className="card-body d-flex flex-column align-items-center">
									<h2 className="card-title text-light">{t.label}</h2>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ItemDetailContainer;
