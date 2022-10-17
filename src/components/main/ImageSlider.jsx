import React, { useState, useEffect } from "react";
import { SliderData, SliderDataMobile } from "../helpers/data";
import "./ImageSlider.css";
import LeftArrow from "../images/left-arrow2.png";
import RightArrow from "../images/right-arrow2.png";

const ImageSlider = ({ slides, windowWidth, breakPoint }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	// Funciones de botones para mover las slides.
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	// Este useEffect hace que las slides se pasen solas cada 3 segundos
	useEffect(() => {
		const slideInterval = setInterval(() => {
			nextSlide();
		}, 3000); // << Este es el tiempo que tarda en pasarse de una a otra slide.

		return () => clearInterval(slideInterval);
	}, [current]);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	//////////// Fin useEffect ////////////

	return (
		<section className="slider">
			{windowWidth < breakPoint ? (
				<div>
					{SliderDataMobile.map((slide, index) => {
						return (
							<div className={index === current ? "slide.active" : "slide"} key={index}>
								{index === current && <img src={slide.image} alt="apple TV" className="image" />}
							</div>
						);
					})}
				</div>
			) : (
				<div>
					{SliderData.map((slide, index) => {
						return (
							<div className={index === current ? "slide.active" : "slide"} key={index}>
								{index === current && <img src={slide.image} alt="apple TV" className="image" />}
							</div>
						);
					})}
				</div>
			)}
			<div className="tv-carrousel-arrows">
				<img src={LeftArrow} alt="Switch to left arrow" className="left-arrow" onClick={prevSlide} />
				<img src={RightArrow} alt="Switch to right arrow" className="right-arrow" onClick={nextSlide} />
			</div>
		</section>
	);
};

export default ImageSlider;
