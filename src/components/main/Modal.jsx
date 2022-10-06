import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, children }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="Wrapper">
			<div className="modal">
				<button onClick={onClose} className="btn-close">
					<span>X</span>
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;

//    <div className={`modal ${true ? "modal-carrito" : null}`}>
