import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import CartItem from "./CartItem";
import "./ModalCart.css";

const ModalCart = ({ show, onClose }) => {
	const { cartItems, clearCart } = useContext(CartContext);

	if (!show) {
		return null;
	}

	return (
		<div className="Wrapper">
			<div className="modal-cart">
				<button onClick={onClose} className="btn-close">
					<span>X</span>
				</button>
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
				<div className="Cart_cartTotal">
					<div>Cart Total</div>
					<div></div>
					<div style={{ marginLeft: 5 }}>{"$" + cartItems.reduce((amount, item) => item.price + amount, 0)}</div>
				</div>
				<button onClick={() => clearCart()}>Clear Cart</button>
			</div>
		</div>
	);
};

export default ModalCart;
