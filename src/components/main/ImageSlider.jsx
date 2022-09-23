import { SliderData } from "../helpers/data";
import React from "react";
import { useState, useEffect } from "react";
import "./ImageSlider.css";
import LeftArrow from "../images/left-arrow.png";
import RightArrow from "../images/right-arrow.png";

console.log(window);

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	useEffect(() => {
		const slideInterval = setInterval(() => {
			nextSlide();
		}, 3000);
		return () => clearInterval(slideInterval);
	});

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			<img src={LeftArrow} alt="arrow" className="left-arrow" onClick={prevSlide} />
			<div className="imagen">
				{SliderData.map((slide, index) => {
					return (
						<div className={index === current ? "slide.active" : "slide"} key={index}>
							{index === current && <img src={slide.image} alt="apple TV" className="image" />}
						</div>
					);
				})}
			</div>
			<img src={RightArrow} alt="arrow" className="right-arrow" onClick={nextSlide} />
		</section>
	);
};

export default ImageSlider;
