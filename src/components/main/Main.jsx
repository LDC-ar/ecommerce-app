import React from "react";
import "./Main.css";
import HeroHome from "./HeroHome";
import HeroProductIphone from "./HeroProductIphone";
import SectionCardIphone from "./SectionCardIphone";
import HeroProductMac from "./HeroProductMac";
import SectionCardMac from "./SectionCardMac";
import HeroProductIpad from "./HeroProductIpad";
import SectionCardIpad from "./SectionCardIpad";
import ImageSlider from "./ImageSlider";
import { SliderData } from "../helpers/data";

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
			<ImageSlider slides={SliderData} />
		</div>
	);
}


export default Main;
