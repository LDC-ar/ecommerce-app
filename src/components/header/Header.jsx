import React from "react";
import "./Header.css";
import logo from "../images/logo-apple.png";
import bag from "../images/icono-bag.png";
import search from "../images/icono-search.png";

function Header() {
	return (
		<header>
			<div className="container-header">
				<a href="#hero-home">
					<img src={logo} alt="logo apple" className="logo" />
				</a>
				
				<nav className="container-nav">
					<ul>
						<li>
							<a href="#home-iphone">iPhone</a>
						</li>
						<li>
							<a href="#home-mac">Mac</a>
						</li>
						<li>
							<a href="#home-ipad">iPad</a>
						</li>
					</ul>
				</nav>
				<div className="container-icons">
					<img src={search} alt="search" className="icon" />
					<img src={bag} alt="cart" className="icon" />
				</div>
			</div>
		</header>
	);
}

export default Header;
