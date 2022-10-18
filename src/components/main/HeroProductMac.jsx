import React from "react";
import ButtonBuy from "./ButtonBuy";
import ButtonInfo from "./ButtonInfo";
import { productsInfo } from "../helpers/data";
import "./HeroProductMac.css";
import ImacHero from "../images/imac-hero.jpg";
import ImacHero2 from "../images/imac-hero2.png";

const HeroProductMac = () => {
	return (
		<div id="home-mac" className="container-hero-mac">
			<h2>MacBook Pro 13”</h2>
			<img src={ImacHero} alt="" className="MacProHero" />
			<img src={ImacHero2} alt="" className="MacProHero2" />
			<p>Pro anywhere.</p>
			<div className="btn-hero-mac">
				<ButtonBuy product={productsInfo[6]} id={productsInfo[6].id} />
				<ButtonInfo id={productsInfo[6].id} category={productsInfo[6].category} />
			</div>
		</div>
	);
};

export default HeroProductMac;
