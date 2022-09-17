import React from "react";
import "./DesktopHeroProductIphone.css";
import IphoneProHero from "../images/iphone-pro-hero2.png";
import ButtonGde from "./ButtonGde";
import ButtonInfoGde from "./ButtonInfoGde";
import { textButton, sectionTitle, cardsInfo } from "../helpers/data";

const DesktopHeroProductIphone = () => {
	return (
		<div className="container-DesktopHeroIphone">
			<div className="col-left-iphone">
				<span>New</span>
				<h2>iPhone 14 Pro</h2>
				<p>
					Available starting 9.16
					<br />
					From $41.62/mo. for 24 mo.
					<br />
					or $999 before trade-in*
				</p>
				<div className="btn-hero-iphone">
					<ButtonGde>{textButton.textoUno}</ButtonGde>
					<ButtonInfoGde />
				</div>
			</div>
			<div className="col-right-iphone">
				<img src={IphoneProHero} alt="iPhone Pro Hero" className="IphoneProHero" />
			</div>
		</div>
	);
};

export default DesktopHeroProductIphone;
