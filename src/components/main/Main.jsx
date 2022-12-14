import React from 'react';
import { sectionTitle, productsInfo } from '../helpers/data';
import './Main.css';
import HeroHome from './HeroHome';
import HeroProductIphone from './HeroProductIphone';
import HeroProductMac from './HeroProductMac';
import HeroProductIpad from './HeroProductIpad';
import SectionCard from './SectionCard';
import ImageCarrousel from './ImageCarrousel';
import ImageCarrouselMobile from './ImageCarrouselMobile';

function Main({ windowWidth, breakPoint }) {
	const phoneArray = productsInfo.filter(product => product.category === 'Phone');
	const computerArray = productsInfo.filter(product => product.category === 'Computer');
	const ipadArray = productsInfo.filter(product => product.category === 'Ipad');

	return (
		<div className="container-main">
			<HeroHome />
			<HeroProductIphone />
			<SectionCard
				productArray={phoneArray}
				title={sectionTitle.title1}
				windowWidth={windowWidth}
				breakPoint={breakPoint}
			/>
			<HeroProductMac />
			<SectionCard
				productArray={computerArray}
				title={sectionTitle.title2}
				windowWidth={windowWidth}
				breakPoint={breakPoint}
			/>
			<HeroProductIpad />
			<SectionCard
				productArray={ipadArray}
				title={sectionTitle.title3}
				windowWidth={windowWidth}
				breakPoint={breakPoint}
			/>
			{windowWidth < breakPoint ? <ImageCarrouselMobile /> : <ImageCarrousel />}
		</div>
	);
}

export default Main;
