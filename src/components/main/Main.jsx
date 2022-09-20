import React from "react";
import "./Main.css";
import ButtonBuy from "./ButtonBuy";
import HeroHome from "./HeroHome";
import HeroProductIphone from "./HeroProductIphone";
import SectionCardIphone from "./SectionCardIphone";
import HeroProductMac from "./HeroProductMac";

function Main(props) {
	return (
		<div className="container-main">
			<HeroHome />
			<HeroProductIphone />
			<SectionCardIphone />
			<HeroProductMac />

			{props.children}
			<ButtonBuy>{}</ButtonBuy>
		</div>
	);
}

export default Main;
