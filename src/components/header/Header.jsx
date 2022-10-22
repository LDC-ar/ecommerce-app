import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import logo from '../images/logo-apple.png';
import Cart from './Cart';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

function Header({ windowWidth, breakPoint }) {
	return (
		<header>
			<motion.div
				className="container-header"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 3 }}
			>
				<a
					href="#hero-home"
					className="container-logo"
				>
					<motion.img
						src={logo}
						alt="logo apple"
						whileTap={{ scale: 0.95 }}
					/>
				</a>
				{windowWidth < breakPoint ? <NavbarMobile /> : <Navbar />}
				<Cart />
			</motion.div>
		</header>
	);
}

export default Header;
