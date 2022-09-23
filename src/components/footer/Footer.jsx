import React from "react";
import "./Footer.css";
import logo from "../images/logo-apple.png";

function Footer() {
	return (
		<footer>
			<div className="container-footer">
				<img src={logo} alt="logo-apple" className="logo-footer" />
				<div className="footer-content">
					<div>
						<h2>Services</h2>
						<a href=" ">Apple Music</a>
						<a href=" ">Apple TV+</a>
						<a href=" ">icloud</a>
						<a href=" ">Apple Books</a>
						<a href=" ">Apple Store</a>
					</div>
					<div>
						<h2>Account</h2>
						<a href=" ">Manage Your Apple iD</a>
						<a href=" ">Apple Store Account</a>
						<a href=" ">icloud.com</a>
						<a href=" ">Support</a>
					</div>
					<div>
						<h2>Store</h2>
						<a href=" ">Find a Store</a>
						<a href=" ">Store App</a>
						<a href=" ">Financing</a>
						<a href=" ">Order Status</a>
						<a href=" ">Shopping Help</a>
					</div>
					<div>
						<h2>About</h2>
						<a href=" ">Career Opportunities</a>
						<a href=" ">inventors</a>
						<a href=" "> Ethics & Compliance</a>
						<a href=" ">Events</a>
						<a href=" ">Contact Apple</a>
					</div>
				</div>
				<hr className="line" />
				<p className="text-footer">Diseño a modo ilustrativo-Curso Numen FullStack 2022. Todas las imagenes y su copyright son propiedad de Apple</p>
			</div>
		</footer>
	);
}

export default Footer;
