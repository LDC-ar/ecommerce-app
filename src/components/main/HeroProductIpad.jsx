import React from "react";
import "./HeroProductIpad.css";
import IpadProHero from "../images/ipad-pro-hero.png";
import ButtonGde from "./ButtonGde";
import ButtonInfoGde from "./ButtonInfoGde";
import { textButton } from "../helpers/data";

const HeroProductIpad = () => {
	return (
		<div className="container-hero-ipad">
			<div className="col-left-ipad">
				<span>New</span>
				<h2>iPad Pro</h2>
				<p>
					The ultimate iPad experience.
					<br />
					Delightfully capable.
					<br />
					Surprisingly affordable.
				</p>
				<div className="btn-hero-ipad">
					<ButtonGde>{textButton.textoUno}</ButtonGde>
					<ButtonInfoGde />
				</div>
			</div>
			<div className="col-right-ipad">
				<img src={IpadProHero} alt="iPad Pro Hero" className="IpadProHero" />
			</div>
		</div>
	);
};

export default HeroProductIpad;
