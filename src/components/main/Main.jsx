import React from "react";
import "./Main.css";
import ButtonBuy from "./ButtonBuy";
import HeroHome from "./HeroHome";
import HeroProductIphone from "./HeroProductIphone";
import SectionCardIphone from "./SectionCardIphone";
import HeroProductMac from "./HeroProductMac";
import SectionCardMac from "./SectionCardMac";
import HeroProductIpad from "./HeroProductIpad";
import SectionCardIpad from "./SectionCardIpad";
import Footer from "../footer/Footer";

function Main(props) {
	return (
		<div className="container-main">
			<HeroHome />
			<HeroProductIphone />
			<SectionCardIphone />
			<HeroProductMac />
			<SectionCardMac />
			<HeroProductIpad />
			<SectionCardIpad />
			{props.children}
			<ButtonBuy>{}</ButtonBuy>
		</div>
	);
}

export default Main;
