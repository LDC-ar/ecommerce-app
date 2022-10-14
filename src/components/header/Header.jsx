import React from "react";
import { useState, useContext } from "react";
import ModalCart from "./ModalCart";
import logo from "../images/logo-apple.png";
import bag from "../images/icono-bag.png";
import search from "../images/icono-search.png";
import "./Header.css";
import "../main/Buttons.css";
import "../main/Modal.css";
import CartContext from "../../context/cart/CartContext";

function Header() {
	const { cartItems } = useContext(CartContext);

	// Modal de botones ///////////
	const [show, setShow] = useState(false);
	////// Fin Modal de botones ///////////

	// Estado del menu responsive //
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
	};
	/////////////////////////////////

	return (
		<header>
			<div className="container-header">
				<a href="#hero-home" className="container-logo">
					<img src={logo} alt="logo apple" />
				</a>
				<button onClick={handleClick} className={`menu-btn icon nav-icon-5 ${clicked ? "open" : ""}`}>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav className={`container-nav ${clicked ? "is-active" : " "}`}>
					<ul>
						<li>
							<a href="#home-iphone" onClick={handleClick}>
								Iphone
							</a>
						</li>
						<li>
							<a href="#home-mac" onClick={handleClick}>
								Mac
							</a>
						</li>
						<li>
							<a href="#home-ipad" onClick={handleClick}>
								IPad
							</a>
						</li>
					</ul>
				</nav>
				<div className="container-icons">
					<a href="">
						<img src={search} alt="search" className="icon" />
					</a>
					<img
						src={bag}
						alt="cart"
						className="icon"
						onClick={() => {
							setShow(true);
						}}
					/>
					{cartItems.length > 0 && (
						<div className="item-count">
							<span>{cartItems.length}</span>
						</div>
					)}
					<ModalCart show={show} onClose={() => setShow(false)} />
				</div>
			</div>
		</header>
	);
}

export default Header;

// onClick={() => {
// 	const fun1 = setShow(true);
// 	const fun2 = setIsModalCarrito(true);
// 	fun1();
// 	fun2();
// }}
