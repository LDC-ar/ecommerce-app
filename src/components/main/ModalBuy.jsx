import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { RiCloseFill } from "react-icons/ri";
import "./Modal.css";

const ModalBuy = ({ show, onClose, productInfo }) => {
	if (!show) {
		return null;
	}

	const { title, price, img, description } = productInfo;

	return (
		<div className="Wrapper">
			<div className="modal">
				<button onClick={onClose} className="btn-close">
					<span>
						<RiCloseFill />
					</span>
				</button>
				<div className="modal-buy-container">
					<img src={img} alt={title} className="modal-buy-img" />
					<h3 className="modal-buy-title">{title}</h3>
					<h4 className="modal-buy-description">{description}</h4>
					<h5 className="modal-buy-price">${price}</h5>
					<p className="modal-buy-added">Product added to your cart</p>
					
				</div>
			</div>
		</div>
	);
};

export default ModalBuy;
