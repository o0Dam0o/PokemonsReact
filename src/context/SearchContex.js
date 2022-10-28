import React, { createContext, useState } from "react";
export const SearchContex = createContext();

const SearchContexProvider = ({ children }) => {
	const [searchs, setSearchs] = useState("");
	const getSearch = (pokemon) => {
		setSearchs(pokemon.toLowerCase());
	};
	const getEncontrado = () => {
		return searchs;
	};
	return (
		<SearchContex.Provider value={{ getSearch, getEncontrado }}>
			{children}
		</SearchContex.Provider>
	);
};

export default SearchContexProvider;
