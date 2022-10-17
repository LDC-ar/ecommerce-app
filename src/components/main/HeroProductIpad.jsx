import React from "react";
import { productsInfo } from "../helpers/data";
import ButtonBuy from "../common/ButtonBuy";
import ButtonInfo from "../common/ButtonInfo";
import "./HeroProductIpad.css";
import IpadProHero from "../images/ipad-pro-hero.png";

const HeroProductIpad = () => {
	return (
		<div id="home-ipad" className="container-hero-ipad">
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
					<ButtonBuy product={productsInfo[9]} id={productsInfo[9].id} />
					<ButtonInfo id={productsInfo[9].id} category={productsInfo[9].category} />
				</div>
			</div>
			<div className="col-right-ipad">
				<img src={IpadProHero} alt="iPad Pro Hero" className="IpadProHero" />
			</div>
		</div>
	);
};

export default HeroProductIpad;
