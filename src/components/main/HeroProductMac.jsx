import React from 'react';
import { productsInfo } from '../helpers/data';
import ButtonBuy from '../common/ButtonBuy';
import ButtonInfo from '../common/ButtonInfo';
import './HeroProductMac.css';
import ImacHero from '../images/imac-hero.jpg';
import ImacHero2 from '../images/imac-hero2.png';
import { motion } from 'framer-motion';

const HeroProductMac = () => {
	return (
		<div
			id="home-mac"
			className="container-hero-mac"
		>
			<h2>MacBook Pro 13”</h2>
			<motion.img
				src={ImacHero}
				alt=""
				className="MacProHero"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2 }}
			/>
			<motion.img
				src={ImacHero2}
				alt=""
				className="MacProHero2"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2 }}
			/>
			<p>Pro anywhere.</p>
			<div className="btn-hero-mac">
				<ButtonBuy
					product={productsInfo[6]}
					id={productsInfo[6].id}
				/>
				<ButtonInfo
					id={productsInfo[6].id}
					category={productsInfo[6].category}
				/>
			</div>
		</div>
	);
};

export default HeroProductMac;
