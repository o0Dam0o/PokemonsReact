import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./components/Item";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/pokemon/:pokemonId" element={<Item />} />
				<Route path="/type" element={<ItemDetailContainer />} />
				<Route path="/type/:typeId" element={<ItemDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
