import React from "react";
import "./HeroProductMac.css";
import ImacHero from "../images/imac-hero.jpg";
import ImacHero2 from "../images/imac-hero2.png";
import ButtonOrder from "./ButtonOrder";
import ButtonInfo from "./ButtonInfo";

const HeroProductMac = () => {
	return (
		<div id="home-mac" className="container-hero-mac">
			<h2>MacBook Pro 13”</h2>
			<img src={ImacHero} alt="" className="MacProHero" />
			<img src={ImacHero2} alt="" className="MacProHero2" />
			<p>Pro anywhere.</p>
			<div className="btn-hero-mac">
				<ButtonOrder />
				<ButtonInfo />
			</div>
		</div>
	);
};

export default HeroProductMac;
