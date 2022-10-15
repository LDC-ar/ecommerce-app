import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import CartItem from "./CartItem";
import "./ModalCart.css";
import { RiCloseFill } from "react-icons/ri";

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
								<CartItem key={item.id} item={item} />
							))}
						</ul>
					)}
				</div>
				<div className="modal-cart-total">
					<div>Cart Total</div>
					<div></div>
					<div>{"$" + cartItems.reduce((amount, item) => item.price * item.quantity + amount, 0)}</div>
				</div>
				<button onClick={() => clearCart()}>Clear Cart</button>
			</div>
		</div>
	);
};

export default ModalCart;
