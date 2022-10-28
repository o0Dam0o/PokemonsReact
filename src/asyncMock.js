import { async } from "@firebase/util";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./services/firebase";
export const getSearch = async (pokemon) => {
	const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	const data = await resp.json();
	return data;
};
export const getType = async (type) => {
	const resp = await fetch(`https://pokeapi.co/api/v2/${type}`);
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
export const PreciosTipos = {
	electric: 30000,
	normal: 5000,
	fire: 15000,
	water: 15000,
	ice: 30000,
	rock: 15000,
	flying: 20000,
	grass: 20000,
	psychic: 50000,
	ghost: 30000,
	bug: 20000,
	poison: 20000,
	ground: 30000,
	dragon: 50000,
	steel: 50000,
	fighting: 30000,
	dark: 50000,
	fairy: 50000,
};
export const Legendarios = [
	"articuno",
	"zapdos",
	"moltres",
	"mewtwo",
	"mew",
	"raikou",
	"entei",
	"suicune",
	"lugia",
	"ho-oh",
	"celebi",
	"regirock",
	"regice",
	"registeel",
	"latias",
	"latios",
	"kyogre",
	"groudon",
	"rayquaza",
	"jirachi",
	"deoxys-normal",
	"regigigas",
	"heatran",
	"cresselia",
	"uxie",
	"mesprit",
	"azelf",
	"dialga",
	"palkia",
	"giratina-altered",
	"phione",
	"manaphy",
	"darkrai",
	"shaymin-land",
	"arceus",
	"virizion",
	"cobalion",
	"terrakion",
	"tornadus-incarnate",
	"thundurus-incarnate",
	"landorus-incarnate",
	"reshiram",
	"zekrom",
	"kyurem",
	"victini",
	"keldeo-ordinary",
	"meloetta-aria",
	"genesect",
	"xerneas",
	"yveltal",
	"zygarde-50",
	"diancie",
	"hoopa",
	"volcanion",
	"type-null",
	"silvally",
	"tapu-koko",
	"tapu-lele",
	"tapu-bulu",
	"tapu-fini",
	"cosmog",
	"cosmoem",
	"solgaleo",
	"lunala",
	"necrozma",
	"magearna",
	"marshadow",
	"zeraora",
	"meltan",
	"melmetal",
	"kubfu",
	"urshifu-single-strike",
	"glastrier",
	"spectrier",
	"regieleki",
	"regidrago",
	"zacian",
	"zamazenta",
	"eternatus",
	"calyrex",
	"zarude",
];

const guardar = async () => {
	const res = await getPokemonsAll(151, 0);
	const data = await Promise.all(
		res.results.map((p) => {
			return getPokemons(p.url);
		})
	);

	data.forEach(async (p, i) => {
		let precio = Legendarios.includes(p.name)
			? 999999
			: PreciosTipos[p.types[0].type.name] +
			  (p.types[1] ? PreciosTipos[p.types[1].type.name] : 0);
		const docRef = await addDoc(collection(db, "pokemon"), {
			...p,
			price: precio,
			stock: 15,
		});
		console.log("Document written with ID: ", docRef.id);
	});
};
guardar();
