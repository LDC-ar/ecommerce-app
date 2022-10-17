import React, { useState, useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import ModalCart from "../common/ModalCart";
import ModalUs from "../common/ModalUs";
import ModalSearch from "../common/ModalSearch";
import logo from "../images/logo-apple.png";
import bag from "../images/icono-bag.png";
import search from "../images/icono-search.png";
import "./Header.css";
import "../common/Buttons.css";
import "../common/Modal.css";

function Header() {
	const [showSearch, setShowSearch] = useState(false);
	const [showUs, setShowUs] = useState(false);

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

						<li>
							<a
								href="#about-us"
								onClick={() => {
									setShowUs(true);
								}}
							>
								About Us
							</a>
						</li>
					</ul>
					<ModalUs showUs={showUs} onClose={() => setShowUs(false)} />
				</nav>
				<div className="container-icons">
					<img
						src={search}
						alt="search"
						className="icon"
						onClick={() => {
							setShowSearch(true);
						}}
					/>
					<ModalSearch showSearch={showSearch} onClose={() => setShowSearch(false)} />
					<img
						src={bag}
						alt="cart"
						className="icon"
						onClick={() => {
							setShow(!show);
						}}
					/>
					{cartItems.length > 0 && (
						<div className="item-count">
							{/* Este Span lleva el numero total de las cantidades de productos en el carrito "product.quantity" */}
							<span>{cartItems.reduce((amount, item) => item.quantity + amount, 0)}</span>
						</div>
					)}
					<ModalCart show={show} />
				</div>
			</div>
		</header>
	);
}

export default Header;
