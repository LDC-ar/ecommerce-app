import React, { useState } from 'react';
import ModalUs from './ModalUs';
import '../common/Modal.css';
import { motion } from 'framer-motion';
import './Navbar.css';

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Path = props => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="#fff"
		strokeLinecap="round"
		{...props}
	/>
);

function Navbar() {
	const [showUs, setShowUs] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			className="menu"
		>
			<motion.button
				className="btnMenu"
				whileTap={{ scale: 0.97 }}
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg
					width="30"
					height="30"
					viewBox="0 0 23 23"
				>
					<Path
						variants={{
							closed: { d: 'M 2 2.5 L 20 2.5' },
							open: { d: 'M 3 16.5 L 17 2.5' },
						}}
					/>
					<Path
						d="M 2 9.423 L 20 9.423"
						variants={{
							closed: { opacity: 1 },
							open: { opacity: 0 },
						}}
						transition={{ duration: 0.1 }}
					/>
					<Path
						variants={{
							closed: { d: 'M 2 16.346 L 20 16.346' },
							open: { d: 'M 3 2.5 L 17 16.346' },
						}}
					/>
				</svg>
			</motion.button>
			<motion.ul
				variants={{
					open: {
						clipPath: 'inset(0% 0% 0% 0% round 10px)',
						transition: {
							type: 'spring',
							bounce: 0,
							duration: 0.7,
							delayChildren: 0.3,
							staggerChildren: 0.05,
						},
					},
					closed: {
						clipPath: 'inset(10% 50% 90% 50% round 10px)',
						transition: {
							type: 'spring',
							bounce: 0,
							duration: 0.3,
						},
					},
				}}
				style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
			>
				<motion.li variants={itemVariants}>
					<a href="#home-iphone">Iphone</a>
				</motion.li>
				<motion.li variants={itemVariants}>
					<a href="#home-mac">Mac</a>
				</motion.li>
				<motion.li variants={itemVariants}>
					<a href="#home-ipad">IPad</a>
				</motion.li>
				<motion.li variants={itemVariants}>
					<a
						href="#about-us"
						onClick={() => {
							setShowUs(true);
						}}
					>
						About Us
					</a>
				</motion.li>
			</motion.ul>
			<ModalUs
				showUs={showUs}
				onClose={() => setShowUs(false)}
			/>
		</motion.nav>
	);
}

export default Navbar;
