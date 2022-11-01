import logo from "./assets/charizard-logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import SearchBar from "../SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import { Legendarios } from "../../asyncMock";
const Navbar = ({ OnSearch }) => {
	const location = useLocation();
	return (
		<nav className="">
			<div
				className="d-flex justify-content-evenly align-items-center bg-light bg-gradient
 "
			>
				<NavLink
					to={"/"}
					style={{ textDecoration: "none" }}
					className="text-dark"
				>
					<div className="d-flex border-top-0 border-bottom-0 border border-danger px-3">
						<img src={logo} alt="Logo" style={{ width: 70 }}></img>
						<h1 className="logo ">PokeStore</h1>
					</div>
				</NavLink>
				<ul className="d-flex ">
					<li>
						<NavLink
							to="/"
							style={{ textDecoration: "none", color: "black" }}
							className={
								location.pathname === "/"
									? "border-bottom border-2 border-danger"
									: "border border-0"
							}
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/type"}
							style={{ textDecoration: "none", color: "black" }}
							className={({ isActive }) =>
								isActive
									? "border-bottom border-2 border-danger"
									: "border border-0"
							}
						>
							Tipos
						</NavLink>
					</li>
					<li>
						<NavLink
							style={{ textDecoration: "none", color: "black" }}
							to={"/legendarios"}
							className={
								location.pathname === "/legendarios" ||
								Legendarios.includes(location.pathname.slice(9))
									? "border-bottom border-2 border-danger"
									: "border border-0"
							}
						>
							Legendarios
						</NavLink>
					</li>
					<NavLink to="/cart" style={{ textDecoration: "none" }}>
						<CartWidget />
					</NavLink>
				</ul>
				<SearchBar OnSearch={OnSearch} />
			</div>
		</nav>
	);
};
export default Navbar;
