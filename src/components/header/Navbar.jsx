import React, { useState } from 'react';
import ModalUs from '../common/ModalUs';
import '../common/Modal.css';

function Navbar() {
	const [showUs, setShowUs] = useState(false);

	// Estado del menu responsive //
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
	};
	return (
		<nav className={`container-nav ${clicked ? 'is-active' : ' '}`}>
			<ul>
				<li>
					<a
						href="#home-iphone"
						onClick={handleClick}
					>
						Iphone
					</a>
				</li>
				<li>
					<a
						href="#home-mac"
						onClick={handleClick}
					>
						Mac
					</a>
				</li>
				<li>
					<a
						href="#home-ipad"
						onClick={handleClick}
					>
						IPad
					</a>
				</li>
				<li>
					<a
						href="#about-us"
						onClick={() => {
							setShowUs(true);
						}}
					>
						About Us
					</a>
				</li>
			</ul>
			<ModalUs
				showUs={showUs}
				onClose={() => setShowUs(false)}
			/>
		</nav>
	);
}

export default Navbar;
