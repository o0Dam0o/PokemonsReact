export const getSearch = async (pokemon) => {
	const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	const data = await resp.json();
	return data;
};

export const getPokemons = async (pokemon) => {
	const resp = await fetch(pokemon);
	const data = await resp.json();
	return data;
};
export const getPokemonsAll = async (limit = 25, offset = 0) => {
	const resp = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	);
	const data = await resp.json();
	return data;
};
export const colorTipos = {
	electric: "#FFEA70",
	normal: "#B09398",
	fire: "#FF675C",
	water: "#0596C7",
	ice: "#AFEAFD",
	rock: "#999799",
	flying: "#7AE7C7",
	grass: "#4A9681",
	psychic: "#FFC6D9",
	ghost: "#561D25",
	bug: "#A2FAA3",
	poison: "#795663",
	ground: "#D2B074",
	dragon: "#DA627D",
	steel: "#1D8A99",
	fighting: "#2F2F2F",
	dark: "#100F0F",
	fairy: "#FF74B1",
	default: "#2A1A1F",
};
