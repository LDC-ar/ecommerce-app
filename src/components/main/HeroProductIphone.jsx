import React from 'react';
import { productsInfo } from '../helpers/data';
import ButtonOrder from '../common/ButtonOrder';
import ButtonInfo from '../common/ButtonInfo';
import './HeroProductIphone.css';
import IphoneProHero from '../images/iphone-pro-hero2.png';
import { motion } from 'framer-motion';

const HeroProductIphone = () => {
	return (
		<div
			id="home-iphone"
			className="container-hero-iphone"
		>
			<div className="col-left-iphone">
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 3 }}
				>
					New
				</motion.span>
				<h2>iPhone 14 Pro</h2>
				<p>
					Available starting 9.16
					<br />
					From $41.62/mo. for 24 mo.
					<br />
					or $999 before trade-in*
				</p>
				<div className="btn-hero-iphone">
					<ButtonOrder id={productsInfo[0].id} />
					<ButtonInfo
						id={productsInfo[0].id}
						category={'Phone'}
					/>
				</div>
			</div>
			<div className="col-right-iphone">
				<motion.img
					src={IphoneProHero}
					alt="iPhone Pro Hero"
					className="IphoneProHero"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2 }}
				/>
			</div>
		</div>
	);
};

export default HeroProductIphone;
