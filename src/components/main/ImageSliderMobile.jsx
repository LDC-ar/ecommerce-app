import React from "react";
import { SliderDataMobile } from "../helpers/data";
import { useState, useEffect } from "react";
import LeftArrow from "../images/left-arrow2.png";
import RightArrow from "../images/right-arrow2.png";
import "./ImageSlider.css";

const ImageSliderMobile = ({ slides }) => {
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
			{SliderDataMobile.map((slide, index) => {
				return (
					<div className={index === current ? "slide.active" : "slide"} key={index}>
						{index === current && <img src={slide.image} alt="apple TV" className="image" />}
					</div>
				);
			})}
			<div className="buttons">
				<img src={LeftArrow} alt="arrow" className="left-arrow" onClick={prevSlide} />
				<img src={RightArrow} alt="arrow" className="right-arrow" onClick={nextSlide} />
			</div>
		</section>
	);
};

export default ImageSliderMobile;
