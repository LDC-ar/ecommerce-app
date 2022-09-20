import React from "react";
import "./HeroProductMac.css";
import ImacHero from "../images/imac-hero.png";
import ButtonGde from "./ButtonGde";
import ButtonInfoGde from "./ButtonInfoGde";
import { textButton } from "../helpers/data";

const HeroProductMac = () => {
	return (
		<div className="container-hero-mac">
			<h2>MacBook Pro 13”</h2>
			<img src={ImacHero} alt="" className="MacProHero" />
			<p>Pro anywhere.</p>
			<div className="btn-hero-mac">
				<ButtonGde>{textButton.textoUno}</ButtonGde>
				<ButtonInfoGde />
			</div>
		</div>
	);
};

export default HeroProductMac;
