import { colorTipos } from "../asyncMock";
import ItemCount from "../components/ItemCount/ItemCount";
const ItemFinal = ({ pokemons }) => {
	const color1 = colorTipos[pokemons.types[0].type.name];
	const color2 = pokemons.types[1]
		? colorTipos[pokemons.types[1].type.name]
		: colorTipos.default;
	return (
		<div
			className="d-flex flex-column align-items-center"
			style={{
				background: `radial-gradient(${color2} 33%, ${color1} 33%)0% 0% /5px 5px`,
			}}
		>
			<div>
				<h2
					className="d-flex justify-content-center bg-light rounded-pill "
					style={{
						border: "1px dashed black",
						padding: "3px",
						color: `${color1}`,
						marginBottom: "20px",
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
				style={{ borderTop: "1px dashed black", padding: "3px", marginTop: 15 }}
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
										color: `${x === 0 ? color1 : color2}`,
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
				<ItemCount
					pokemon={pokemons}
					stock={Math.floor(Math.random() * 21)}
					initial={1}
				/>
				<div className="bg-light w-25 d-flex flex-column align-items-center">
					<h4>Puntos de Base</h4>
					<div>Experiencia Base {pokemons.base_experience}</div>
					{pokemons.stats.map((p, i) => {
						return (
							<div key={i} style={{ width: 300 }}>
								<div className="d-flex justify-content-center">
									{p.stat.name}
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
	);
};
export default ItemFinal;
