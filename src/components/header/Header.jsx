import React from "react";
import { useState } from "react";
import logo from "../images/logo-apple.png";
import bag from "../images/icono-bag.png";
import search from "../images/icono-search.png";
import ModalUs from "../main/ModalUs";
import ModalSearch from "../main/ModalSearch";
import ModalCarrito from "../main/ModalCarrito";
import "./Header.css";
import "../main/Buttons.css";
import "../main/Modal.css";

function Header() {
	// Modal de botones ///////////
	const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showUs, setShowUs] = useState(false);
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
							<a href="#about-us" onClick={()=> {setShowUs(true)}}>
								About Us
							</a>
						</li>
					</ul>
          <ModalUs showUs={showUs} onClose={() => setShowUs(false)}/>
				</nav>
				<div className="container-icons">
          <img src={search}
              alt="search"
              className="icon"
              onClick={() => {
                setShowSearch(true);
              }}
              />
              <ModalSearch showSearch={showSearch} onClose={() => setShowSearch(false)}/>
					<img
						src={bag}
						alt="cart"
						className="icon"
						onClick={() => {
							setShow(true);
						}}
					/>
					<ModalCarrito show={show} onClose={() => setShow(false)}>
						<h1>Carrito de compra</h1>
					</ModalCarrito>
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
