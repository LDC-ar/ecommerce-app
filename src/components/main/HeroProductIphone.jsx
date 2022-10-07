import React from "react";
import ButtonOrder from "./ButtonOrder";
import ButtonInfo from "./ButtonInfo";
import { productsInfo } from "../helpers/data";
import "./HeroProductIphone.css";
import IphoneProHero from "../images/iphone-pro-hero2.png";

const HeroProductIphone = () => {
	return (
		<div id="home-iphone" className="container-hero-iphone">
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
					<ButtonOrder id={productsInfo[0].id} />
					<ButtonInfo id={productsInfo[0].id} />
				</div>
			</div>
			<div className="col-right-iphone">
				<img src={IphoneProHero} alt="iPhone Pro Hero" className="IphoneProHero" />
			</div>
		</div>
	);
};

export default HeroProductIphone;
