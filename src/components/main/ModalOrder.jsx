import React from "react";
import "./Modal.css";

const ModalOrder = ({ show, onClose, productInfo }) => {
	if (!show) {
		return null;
	}

	const { title, price, img } = productInfo;

	return (
		<div className="Wrapper">
			<div className="modal">
				<button onClick={onClose} className="btn-close">
					<span>X</span>
				</button>
				<div className="modal-content">
					<img src={img} alt={title} style={{ width: "20%" }} />
					<h3>{title}</h3>
					<input type="email" placeholder="Enter your email here"></input>
				</div>
			</div>
		</div>
	);
};

export default ModalOrder;
