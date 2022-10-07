import { colorTipos } from "../asyncMock";
import { Link } from "react-router-dom";
const Items = ({ pokemons }) => {
	const color1 = colorTipos[pokemons.types[0].type.name];
	const color2 = pokemons.types[1]
		? colorTipos[pokemons.types[1].type.name]
		: colorTipos.default;
	return (
		<div
			className="d-flex flex-column m-2 border justify-content-between w-10 align-items-center"
			style={{ width: 290 }}
		>
			<div className="d-flex justify-content-center my-2">
				<div className="mx-2">#{pokemons.id}</div>
				<div className="">{pokemons.name.toUpperCase()}</div>
			</div>
			<div
				className="mx-4 border rounded-5 "
				style={{
					background: `radial-gradient(${color2} 33%, ${color1} 33%)0% 0% /5px 5px`,
					padding: "0 30px",
				}}
			>
				<img src={pokemons.sprites.front_default} alt={pokemons.name} />
			</div>
			<div className="mx-4 d-flex justify-content-center">
				{pokemons.types.map((p, x) => {
					return (
						<div
							style={{
								border: "1px dashed black",
								margin: 4,
								padding: "2px 20px",
							}}
							key={p.type.name}
						>
							<Link
								to={`/type/${p.type.name}`}
								style={{
									textDecoration: "none",
									color: `${x === 0 ? color1 : color2}`,
								}}
							>
								{p.type.name.toUpperCase()}
							</Link>
						</div>
					);
				})}
			</div>
			<div className=" justify-content-center mt-2">
				<button
					style={{
						border: "1px dashed black",
						background: "none",
						padding: 5,
						marginBottom: 5,
					}}
				>
					<Link
						className="text-dark"
						to={`/pokemon/${pokemons.id}`}
						style={{ textDecoration: "none" }}
					>
						Mas Informacion
					</Link>
				</button>
			</div>
		</div>
	);
};
export default Items;
