import I from "./i";

const B = ({ pokemons }) => {
	return (
		<div>
			<div className="d-flex flex-wrap justify-content-center mx-5 alingn-items-center">
				{pokemons.map((pokemons, i) => {
					return <I pokemons={pokemons} key={i} />;
				})}
			</div>
		</div>
	);
};
export default B;
