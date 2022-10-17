import React, { useState, useEffect } from "react";
import { SliderData, sectionTitle, productsInfo } from "../helpers/data";
import "./Main.css";
import HeroHome from "./HeroHome";
import HeroProductIphone from "./HeroProductIphone";
import HeroProductMac from "./HeroProductMac";
import HeroProductIpad from "./HeroProductIpad";
import SectionCard from "./SectionCard";
import ImageSlider from "./ImageSlider";
import ImageSliderMobile from "./ImageSliderMobile";

function Main() {
	const phoneArray = productsInfo.filter(product => product.category === "Phone");
	const computerArray = productsInfo.filter(product => product.category === "Computer");
	const ipadArray = productsInfo.filter(product => product.category === "Ipad");

	///////////////////////////////////////////////////////////////////////////////
	////////////Este event listener es para saber el ancho de la pantalla//////////
	///////////////////////////////////////////////////////////////////////////////
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const breakPoint = 768;

	useEffect(() => {
		function watchWidth() {
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
			<SectionCard productArray={phoneArray} title={sectionTitle.title1} windowWidth={windowWidth} breakPoint={breakPoint} />
			<HeroProductMac />
			<SectionCard productArray={computerArray} title={sectionTitle.title2} windowWidth={windowWidth} breakPoint={breakPoint} />
			<HeroProductIpad />
			<SectionCard productArray={ipadArray} title={sectionTitle.title3} windowWidth={windowWidth} breakPoint={breakPoint} />
			{windowWidth < breakPoint ? <ImageSliderMobile slides={SliderData} /> : <ImageSlider slides={SliderData} />}
		</div>
	);
}

export default Main;
