import { colorTipos, Legendarios } from "../asyncMock";
import { Link } from "react-router-dom";
const Items = ({ pokemons }) => {
	return (
		<div
			className={`d-flex flex-column m-2 border justify-content-between w-10 align-items-center ${
				Legendarios.includes(pokemons.name) && "bg-warning"
			}`}
			style={{
				width: 290,
				background: `${
					Legendarios.includes(pokemons.name) &&
					`linear-gradient(87deg, rgba(180,58,58,1) 3%, rgba(255,222,0,1) 46%, rgba(252,130,69,1) 90%)`
				}`,
			}}
		>
			<div className="d-flex justify-content-center my-2">
				<div className="mx-2">#{pokemons.id}</div>
				<div className="">{pokemons.name.toUpperCase()}</div>
			</div>
			{pokemons && (
				<div
					className="mx-4 border rounded-5 "
					style={{
						background: `radial-gradient(${
							pokemons?.types[1]
								? colorTipos[pokemons.types[1].type.name]
								: colorTipos.default
						} 33%, ${
							colorTipos[pokemons.types[0].type.name]
						} 33%)0% 0% /5px 5px`,
						padding: "0 30px",
					}}
				>
					<img src={pokemons.sprites.front_default} alt={pokemons.name} />
				</div>
			)}
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
									color: `${
										x === 0
											? colorTipos[pokemons.types[0].type.name]
											: pokemons.types[1]
											? colorTipos[pokemons.types[1].type.name]
											: colorTipos.default
									}`,
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
						to={`/pokemon/${pokemons.idFirebase}`}
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
