import React from "react";
import "./Cards.css";
import { aboutUs } from "../helpers/data";
import LinkdeIn from "../images/linkedin-logo-24.png";
import Github from "../images/github-logo-24.png";

const CardsUs = ({ src, nombre, link1, link2 }) => {
	console.log(aboutUs);

	return (
		<div className="content-card-us">
			<div className="image-us">
				<img className="img-us" src={src} alt="miembro del equipo" />
			</div>
			<div className="info-us">
				<h3>{nombre}</h3>
				<div className="icons-us">
					<a href={link1} target="blank" className="links-us">
						<img src={LinkdeIn} alt="icono linkedIn" />{" "}
					</a>
					<a href={link2} target="blank" className="links-us">
						<img src={Github} alt="icono Github" />{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default CardsUs;
