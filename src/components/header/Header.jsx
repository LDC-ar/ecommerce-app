import React from 'react';
import logo from '../images/logo-apple.png';
import './Header.css';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import SearchCart from './SearchCart';
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
					<img
						src={logo}
						alt="logo apple"
					/>
				</a>
				{windowWidth < breakPoint ? <NavbarMobile /> : <Navbar />}
				<SearchCart />
			</motion.div>
		</header>
	);
}

export default Header;
