import React, { createContext, useContext, useState } from "react";
const SearchContex = createContext();
export const useSearchContex = () => {
	return useContext(SearchContex);
};
export const SearchContexProvider = ({ children }) => {
	const [searchs, setSearchs] = useState("");
	const getSearch = (pokemon) => {
		setSearchs(pokemon?.toLowerCase());
	};
	return (
		<SearchContex.Provider value={{ getSearch, searchs }}>
			{children}
		</SearchContex.Provider>
	);
};
