import logo from "./assets/charizard-logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
const Navbar = ({ OnSearch }) => {
	return (
		<nav className="">
			<div
				className="d-flex justify-content-evenly align-items-center bg-light bg-gradient
 "
			>
				<div className="d-flex border-top-0 border-bottom-0 border border-danger px-3">
					<img src={logo} alt="Logo" style={{ width: 70 }}></img>
					<h1 className="logo ">PokeStore</h1>
				</div>
				<ul className="d-flex">
					<li>
						<Link to={"/"}>Inicio</Link>
					</li>
					<li>Tipos</li>
					<li>Generacion</li>
					<li>Legendarios</li>
					<CartWidget />
				</ul>
				<SearchBar OnSearch={OnSearch} />
			</div>
		</nav>
	);
};
export default Navbar;
