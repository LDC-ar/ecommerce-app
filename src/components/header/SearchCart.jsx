import React, { useState, useContext } from 'react';
import bag from '../images/icono-bag.png';
import search from '../images/icono-search.png';
import ModalCart from './ModalCart';
import ModalSearch from '../common/ModalSearch';
import '../common/Buttons.css';
import '../common/Modal.css';
import CartContext from '../../context/cart/CartContext';

function SearchCart() {
	const [showSearch, setShowSearch] = useState(false);

	const { cartItems } = useContext(CartContext);

	// Modal de botones ///////////
	const [show, setShow] = useState(false);
	////// Fin Modal de botones ///////////

	return (
		<div className="container-icons">
			<img
				src={search}
				alt="search"
				className="icon"
				onClick={() => {
					setShowSearch(true);
				}}
			/>
			<ModalSearch
				showSearch={showSearch}
				onClose={() => setShowSearch(false)}
			/>
			<img
				src={bag}
				alt="cart"
				className="icon"
				onClick={() => {
					setShow(!show);
				}}
			/>
			{cartItems.length > 0 && (
				<div className="item-count">
					{/* Este Span lleva el numero total de las cantidades de productos en el carrito "product.quantity" */}
					<span>{cartItems.reduce((amount, item) => item.quantity + amount, 0)}</span>
				</div>
			)}
			<ModalCart show={show} />
		</div>
	);
}

export default SearchCart;
