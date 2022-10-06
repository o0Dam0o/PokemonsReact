import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ pokemons }) => {
	return (
		<div>
			<h2>{pokemons.name}</h2>
			<ItemDetail pokemons={pokemons} />
		</div>
	);
};

export default ItemDetailContainer;
