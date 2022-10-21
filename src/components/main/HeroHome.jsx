import React from 'react';
import './HeroHome.css';
import ApplePersonaWatch from '../images/apple-persona-watch.png';
import AppleWatch from '../images/apple-watch.png';
import { motion } from 'framer-motion';

const DesktopHeroHome = () => {
	return (
		<div
			id="hero-home"
			className="container-hero-home"
		>
			<div className="col-left-hero-home">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'backInOut', duration: 3 }}
				>
					The future of health is on your wrist.
				</motion.h1>
				<motion.img
					src={ApplePersonaWatch}
					alt="Apple Persona Watch"
					className="ApplePersonaWatch"
					initial={{ scale: 0.6, opacity: 0.6 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1 }}
				/>
			</div>
			<div className="mobile-background"></div>
			<div className="col-right-hero-home">
				<motion.img
					src={AppleWatch}
					alt="Apple Watch"
					className="AppleWatch"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
				/>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'backInOut', duration: 4 }}
				>
					Measure your blood oxygen level.
					<br />
					Keep an eye on your heart.
					<br />
					See your fitness metrics on the enhanced Always-On Retina display.
					<br />
					Live a healthier, more active, connected life.
				</motion.p>
			</div>
		</div>
	);
};

export default DesktopHeroHome;
