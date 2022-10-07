import React from "react";
import "./Modal.css";

const ModalInfo = ({ show, onClose, productInfo }) => {
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
					<h4>${price}</h4>
				</div>
			</div>
		</div>
	);
};

export default ModalInfo;
