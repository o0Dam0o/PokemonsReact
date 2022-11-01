import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./components/Item";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail";
import CartContextProvider from "./context/CartContext";
import NotifiacionContexProvider from "./context/NotificacionContext";
import SearchContexProvider from "./context/SearchContex";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
	return (
		<NotifiacionContexProvider>
			<CartContextProvider>
				<SearchContexProvider>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route exact path="/" element={<ItemListContainer />} />
							<Route path="/:pokedexId" element={<ItemListContainer />} />
							<Route path="/pokemon/:pokemonId" element={<Item />} />
							<Route
								path="/type"
								element={<ItemDetailContainer type={"type"} />}
							/>
							<Route
								path="/type/:typeId"
								element={<ItemDetail type={false} />}
							/>
							<Route path="/legendarios" element={<ItemDetail />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route
								path="*"
								element={
									<div
										className="d-flex justify-content-center bg-danger"
										style={{ height: "92vh" }}
									>
										<div
											className="w-50 d-flex flex-column align-items-center my-5 bg-light bg-opacity-75 justify-content-around"
											style={{ border: "1px dashed black" }}
										>
											<h3 className="error">ERROR 404</h3>
											<img
												src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
												alt="error 404"
											/>
											<p className="fs-2">Snorlax salvage nos impide el paso</p>
										</div>
									</div>
								}
							/>
						</Routes>
					</BrowserRouter>
				</SearchContexProvider>
			</CartContextProvider>
		</NotifiacionContexProvider>
	);
}

export default App;
