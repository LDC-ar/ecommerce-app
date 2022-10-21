import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { SliderData } from '../helpers/data';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageCarrousel = () => {
	return (
		<AutoplaySlider
			className="aws-btn-desktop"
			play={true}
			cancelOnInteraction={false}
			interval={3000}
			bullets={false}
		>
			{SliderData.map(slide => (
				<div
					key={slide.id}
					data-src={slide.image}
				/>
			))}
		</AutoplaySlider>
	);
};

export default ImageCarrousel;
