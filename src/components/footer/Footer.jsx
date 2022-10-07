import React from "react";
import "./Footer.css";
import logo from "../images/logo-apple.png";

function Footer() {
	return (
<footer>
			<div className="container-footer">
				<div className="footer-grid">
					<div className="footer-links">
            <details>
            <summary><h2>Services</h2></summary>
						<summary><a href=" ">Apple Music</a></summary>
						<summary><a href=" ">Apple TV+</a></summary>
						<summary><a href=" ">icloud</a></summary>
						<summary><a href=" ">Apple Books</a></summary>
						<summary><a href=" ">Apple Store</a></summary>
            </details>
					</div>
					<div className="footer-links">
            <details>
            <summary><h2>Account</h2></summary>
						<summary><a href=" ">Manage Your Apple iD</a></summary>
						<summary><a href=" ">Apple Store Account</a></summary>
						<summary><a href=" ">icloud.com</a></summary>
						<summary><a href=" ">Support</a></summary>
            </details>
					</div>
					<div className="footer-links">
            <details>
              <summary><h2>Store</h2></summary>
              <summary><a href=" ">Find a Store</a></summary>
              <summary><a href=" ">Store App</a></summary>
              <summary><a href=" ">Financing</a></summary>
              <summary><a href=" ">Order Status</a></summary>
              <summary><a href=" ">Shopping Help</a></summary>
          </details>
					</div>
					<div className="footer-links">
            <details>
            <summary><h2>About</h2></summary>
						<summary><a href=" ">Career Opportunities</a></summary>
						<summary><a href=" ">inventors</a></summary>
						<summary><a href=" "> Ethics & Compliance</a></summary>
						<summary><a href=" ">Events</a></summary>
						<summary><a href=" ">Contact Apple</a></summary>
            </details>
					</div>
					<div className="footer-logo">
						<img src={logo} alt="logo-apple" />
					</div>
				</div>
				<hr className="line" />
				<p className="footer-copyright">Diseño a modo ilustrativo-Curso Numen FullStack 2022. Todas las imagenes y su copyright son propiedad de Apple.</p>
			</div>
		</footer>
	);
}

export default Footer;
