import Items from "./Items";
const ItemList = ({ pokemons }) => {
	return (
		<div>
			<div className="d-flex flex-wrap justify-content-center mx-5 alingn-items-center">
				{pokemons.map((pokemons, i) => {
					return <Items pokemons={pokemons} key={i} />;
				})}
			</div>
		</div>
	);
};
export default ItemList;
