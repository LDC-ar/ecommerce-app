import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { SliderDataMobile } from '../helpers/data';
import './ImageCarrousel.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageCarrouselMobile = () => {
	return (
		<AutoplaySlider
			className="aws-btn"
			play={true}
			cancelOnInteraction={false}
			interval={3000}
			bullets={false}
		>
			{SliderDataMobile.map(slide => (
				<div
					key={slide.id}
					data-src={slide.image}
				/>
			))}
		</AutoplaySlider>
	);
};

export default ImageCarrouselMobile;
