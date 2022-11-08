import React, { createContext, useState } from "react";
export const SearchContex = createContext();

const SearchContexProvider = ({ children }) => {
	const [searchs, setSearchs] = useState("");
	const getSearch = (pokemon) => {
		setSearchs(pokemon?.toLowerCase());
	};
	const getEncontrado = () => {
		return searchs;
	};
	console.log(searchs);
	return (
		<SearchContex.Provider value={{ getSearch, getEncontrado, searchs }}>
			{children}
		</SearchContex.Provider>
	);
};

export default SearchContexProvider;
