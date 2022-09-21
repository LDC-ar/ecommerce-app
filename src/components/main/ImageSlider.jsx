import { SliderData } from "../helpers/data";
import React from "react";
import { useState } from "react";
import "./ImageSlider.css";
import LeftArrow from "../images/left-arrow.png";
import RightArrow from "../images/right-arrow.png";

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			<img src={LeftArrow} alt="arrow" className="left-arrow" onClick={prevSlide} />
			<img src={RightArrow} alt="arrow" className="right-arrow" onClick={nextSlide} />

			{SliderData.map((slide, index) => {
				console.log(slide.image);
				return (
					<div className={index === current ? "slide.active" : "slide"} key={index}>
						{index === current && <img src={slide.image} alt="apple TV" className="image" />}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
