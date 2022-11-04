import { colorTipos } from "../asyncMock";
import ItemCount from "../components/ItemCount/ItemCount";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNotificacion } from "../context/NotificacionContext";

const ItemFinal = ({ pokemons }) => {
	const { id, name, types, sprites, price, stock } = pokemons;
	const { addCart, initial } = useCart();
	const { setNotification } = useNotificacion();
	const [loading, setLoading] = useState(true);

	const handleOnAdd = (count) => {
		const pokemon = {
			id,
			name,
			types,
			sprites,
			price,
			count,
		};

		addCart(pokemon);
		if (!initial(pokemon)) {
			if (count === 0) {
				setNotification(
					"error",
					`Se elimino ${name.toUpperCase()} del carrito `
				);
			}
			if (count > 0)
				setNotification(
					"success",
					`Se agrego correctamente ${count} Pokemons de ${name.toUpperCase()} `
				);
		} else {
			setNotification(
				"update",
				`Se Actualizo correctamente ${count} Pokemons de ${name.toUpperCase()} `
			);
		}
	};
	setTimeout(() => {
		setLoading(false);
	}, 800);
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
		<>
			<div
				className="d-flex flex-column align-items-center"
				style={{
					background: `radial-gradient(${
						pokemons?.types[1]
							? colorTipos[pokemons.types[1].type.name]
							: colorTipos.default
					} 33%, ${colorTipos[pokemons.types[0].type.name]} 33%)0% 0% /5px 5px`,
					padding: "0 30px",
				}}
			>
				<div>
					<h2
						className="d-flex justify-content-center bg-light rounded-pill "
						style={{
							border: "1px dashed black",
							padding: "3px",
							color: `${colorTipos[pokemons.types[0].type.name]}`,
							marginTop: "15px",
						}}
					>
						{pokemons.name.toUpperCase()}
					</h2>

					<div className="d-flex justify-content-center ">
						<img
							src={pokemons.sprites.front_default}
							alt={pokemons.name}
							width={500}
							height={500}
						/>
					</div>
				</div>
				<div
					className="d-flex w-100 bg-light justify-content-around "
					style={{
						borderTop: "1px dashed black",
						borderLeft: "1px dashed black",
						borderRight: "1px dashed black",
						padding: "3px",
						marginTop: 15,
					}}
				>
					<div className="bg-light w-25 d-flex flex-column align-items-center">
						<h4>Caracteristicas</h4>
						<div>Altura {pokemons.height / 10} m</div>
						<div>Peso {pokemons.weight / 10} kg</div>
						<div className="d-flex flex-column align-items-center">
							<h5>Habilidades</h5>
							{pokemons.abilities.map((p, i) => {
								return <div key={i}>{p.ability.name}</div>;
							})}
							<h5>Tipo</h5>
							{pokemons.types.map((p, x) => {
								return (
									<div
										className=""
										style={{
											display: "flex",
											justifyContent: "center",
											color: `${
												x === 0
													? colorTipos[pokemons.types[0].type.name]
													: pokemons.types[1]
													? colorTipos[pokemons.types[1].type.name]
													: colorTipos.default
											}`,
											width: 200,
											border: "1px dashed black",
											margin: 4,
											padding: "2px 20px",
										}}
										key={p.type.name}
									>
										{p.type.name.toUpperCase()}
									</div>
								);
							})}
						</div>
					</div>
					<div className="bg-light w-25 d-flex flex-column align-items-center justify-content-around ">
						<div>
							<h3>Precio ${price}</h3>
						</div>
						<ItemCount
							pokemon={pokemons}
							stock={stock}
							initial={initial(pokemons) ?? 1}
							handleOnAdd={handleOnAdd}
						/>
					</div>
					<div className="bg-light w-25 d-flex flex-column align-items-center">
						<h4>Puntos de Base</h4>
						<div>Experiencia Base {pokemons.base_experience}</div>
						{pokemons.stats.map((p, i) => {
							return (
								<div key={i} style={{ width: 300 }}>
									<div className="d-flex justify-content-center">
										{p.stat.name.toUpperCase()}
									</div>
									<div className="progress w-100 ">
										<div
											className="progress-bar progress-bar-striped"
											role="progressbar"
											aria-label="Default striped example"
											aria-valuenow="10"
											aria-valuemin="0"
											aria-valuemax="255"
											style={{ width: `${(p.base_stat / 255) * 100}%` }}
										>
											{p.base_stat}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
export default ItemFinal;
