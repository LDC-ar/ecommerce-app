import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { textButton, productsInfo } from '../helpers/data';
import CartContext from '../../context/cart/CartContext';
import ModalBuy from './ModalBuy';
import './Buttons.css';
import './Modal.css';

const ButtonBuy = ({ id, product }) => {
	const { addToCart } = useContext(CartContext);

	// Estado 1: Muestra o no el modal
	const [show, setShow] = useState(false);

	// Estado 2: Muestra la info del producto en el modal //
	const [modalInfo, setModalInfo] = useState({});

	const handleClick = id => {
		return setShow(true), setModalInfo(...checkId(id)), addToCart(product);
	};

	function checkId(id) {
		return productsInfo.filter(product => product.id === id);
	}
	// FIN Estado 2 //

	return (
		<div>
			<div className="container">
				<motion.button
					className="btn btnCH btnBuy"
					onClick={() => handleClick(id)}
					whileTap={{ scale: 0.95, boxShadow: '0px' }}
				>
					{textButton.buy}
				</motion.button>
				<ModalBuy
					show={show}
					productInfo={modalInfo}
					onClose={() => setShow(false)}
				/>
			</div>
		</div>
	);
};

export default ButtonBuy;
