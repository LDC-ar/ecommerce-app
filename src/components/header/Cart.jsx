import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import bag from '../images/icono-bag.png';
import ModalCart from './ModalCart';
import '../common/Buttons.css';
import '../common/Modal.css';
import CartContext from '../../context/cart/CartContext';
import './Header.css';

function SearchCart() {
	const { cartItems } = useContext(CartContext);

	// Modal de botones ///////////
	const [show, setShow] = useState(false);
	////// Fin Modal de botones ///////////

	return (
		<div className="container-icons">
			<motion.img
				src={bag}
				alt="cart"
				className="cartIcon"
				onClick={() => {
					setShow(!show);
				}}
				whileTap={{ scale: 0.95 }}
			/>
			{cartItems.length > 0 && (
				<motion.div
					className="item-count"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
					transition={{ ease: 'easeOut', duration: 1 }}
				>
					{/* Este Span lleva el numero total de las cantidades de productos en el carrito "product.quantity" */}
					<span>{cartItems.reduce((amount, item) => item.quantity + amount, 0)} </span>
				</motion.div>
			)}
			<ModalCart show={show} />
		</div>
	);
}

export default SearchCart;
