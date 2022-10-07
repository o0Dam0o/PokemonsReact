import { getType, getPokemons, colorTipos } from "../asyncMock";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ItemDetailContainer = () => {
	const [types, setTypes] = useState({});
	const [loading, setLoading] = useState(false);
	const getFetch = async () => {
		setLoading(false);
		const res = await getType("type");
		const data = await Promise.all(
			res.results.map((t) => {
				return getPokemons(t.url);
			})
		);
		setTypes(data);
	};
	useEffect(() => {
		getFetch();
		setTimeout(() => {
			setLoading(true);
		}, 500);
	}, []);
	return (
		<div className="d-flex flex-wrap justify-content-center mt-3">
			{!loading ? (
				<div className="position-absolute top-50 start-50 translate-middle">
					<div className="spinner-border text-danger " role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				types.map((t, i) => {
					return (
						<div
							className="card mb-2 m-2"
							key={i}
							style={{
								background: `radial-gradient(${colorTipos.default} 33%, ${
									colorTipos[t.name]
								} 33%)0% 0% /5px 5px`,
								padding: "0 30px",
								width: "25%",
								height: "15%",
							}}
						>
							<Link to={t.name} style={{ textDecoration: "none" }}>
								<div className="card-body d-flex flex-column align-items-center">
									<h2 className="card-title text-light">
										{t.name.toUpperCase()}
									</h2>
									<p className="card-text ">
										<small className="text-muted border bg-light rounded-start">
											Pokemons: {t.pokemon.length}
										</small>
									</p>
								</div>
							</Link>
						</div>
					);
				})
			)}
		</div>
	);
};

export default ItemDetailContainer;
