import React from "react";
import "./Modal.css";

const ModalCarrito = ({ show, onClose, children }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="Wrapper">
			<div className="modal-carrito">
				<button onClick={onClose} className="btn-close">
					<span>X</span>
				</button>
				{children}
			</div>
		</div>
	);
};

export default ModalCarrito;
