import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';
import '../common/Buttons.css';
import './ModalCart.css';

const ModalCart = ({ show }) => {
	const { cartItems, clearCart } = useContext(CartContext);

	if (!show) {
		return null;
	}

	return (
		<div className="cart-wrapper">
			<div className="modal-cart">
				<div className="modal-cart-grid">
					{cartItems.length === 0 ? (
						<h4>Cart is empty</h4>
					) : (
						<ul>
							{cartItems.map(item => (
								<CartItem
									key={item.id}
									item={item}
								/>
							))}
						</ul>
					)}
				</div>
				<div className={`modal-cart-bottom ${cartItems.length === 0 && 'displayNone'}`}>
					<motion.button
						className="modal-cart-bottom-checkout btnCheckout"
						whileTap={{ scale: 0.95, boxShadow: '0px' }}
					>
						Checkout
					</motion.button>
					<div className="modal-cart-bottom-total">Total:</div>
					<div className="modal-cart-bottom-totalNumber">{'$ ' + cartItems.reduce((amount, item) => item.price * item.quantity + amount, 0)}</div>
					<motion.button
						onClick={() => clearCart()}
						className="modal-cart-bottom-clearCart btnClear"
						whileTap={{ scale: 0.95, boxShadow: '0px' }}
					>
						Clear
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default ModalCart;
