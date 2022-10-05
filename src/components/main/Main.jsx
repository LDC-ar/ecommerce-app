import React, { useState, useEffect } from "react";
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
// import { useState } from "react";

function Main(props) {
	///////////////////////////////////////////////////////////////////////////////
	////////////Este event listener es para saber el ancho de la pantalla//////////
	///////////////////////////////////////////////////////////////////////////////
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const breakPoint = 768;

	// setTimeout(() => {
	// 	window.removeEventListener("resize", watchWidth);
	// }, "5000");

	useEffect(() => {
		function watchWidth() {
			console.log("Cambiando el ancho");
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", watchWidth);

		return () => window.removeEventListener("resize", watchWidth);
	}, [windowWidth]);
	///////////////////////////////////////////////////////////////////////////////

	return (
		<div className="container-main">
			<HeroHome />
			<HeroProductIphone />
			<SectionCardIphone windowWidth={windowWidth} breakPoint={breakPoint} />
			<HeroProductMac />
			<SectionCardMac windowWidth={windowWidth} breakPoint={breakPoint} />
			<HeroProductIpad />
			<SectionCardIpad windowWidth={windowWidth} breakPoint={breakPoint} />
			{/* <ImageSlider slides={SliderData} /> */}
		</div>
	);
}

export default Main;
