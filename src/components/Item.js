import { colorTipos, getSearch } from "../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export { getSearch } from "../asyncMock";
const Item = () => {
	const [pokemons, setPokemons] = useState({});
	const { pokemonId } = useParams();
	const { loading, setLoading } = useState(false);
	const getFetch = async () => {
		const res = await getSearch(pokemonId);
		const data = await res;
		setPokemons(data);
	};
	useEffect(() => {
		getFetch();
		setLoading(true);
	}, [pokemonId]);

	if (!loading) {
		console.log(!loading);

		return <div>Cargando...</div>;
	}
	const color1 = colorTipos[pokemons.types[0].type.name];
	const color2 = pokemons.types[1]
		? colorTipos[pokemons.types[1].type.name]
		: colorTipos.default;
	return (
		<>
			<div
				className="mx-4 border rounded-circle "
				style={{
					background: `radial-gradient(${color2} 33%, ${color1} 33%)0% 0% /5px 5px`,
				}}
			>
				<img
					src={pokemons.sprites.front_default}
					alt={pokemons.name}
					width={500}
				/>
			</div>
			<div
				className="bg-light"
				style={{ border: "1px dashed black", padding: "3px" }}
			>
				<h4>Caracteristicas</h4>
				<div>Altura {pokemons.height / 10} m</div>
				<div>Peso {pokemons.weight / 10} kg</div>
				<div>
					<h5>Habilidades</h5>
					{pokemons.abilities.map((p, i) => {
						return <div key={i}>{p.ability.name}</div>;
					})}
					<h5>Tipo</h5>
					{pokemons.types.map((p, x) => {
						return (
							<div
								style={{
									color: `${x === 0 ? color1 : color2}`,

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
			<div
				className="bg-light "
				style={{ border: "1px dashed black", padding: "3px" }}
			>
				<h4>Puntos de Base</h4>
				<div>Experiencia Base{pokemons.base_experience}</div>
				{pokemons.stats.map((p, i) => {
					return (
						<div key={i}>
							<div>{p.stat.name}</div>
							<div className="progress w-100">
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
		</>
	);
};

export default Item;
