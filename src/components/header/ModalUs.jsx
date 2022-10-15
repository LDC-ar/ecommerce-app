import React from "react";
import CardsUs from "../main/CardsUs";
import "../main/Modal.css";
import { aboutUs } from "../helpers/data";

const ModalUs = ({ showUs, onClose }) => {
	if (!showUs) {
		return null;
	}

	return (
		<div className="Wrapper">
			<div className="modal-us">
				<button onClick={onClose} className="btn-close">
					<span>X</span>
				</button>
				<div className="content-us">
					{aboutUs.map((card, index) => {
						return <CardsUs key={card.id} src={card.image} nombre={card.nombre} link1={card.linkedIn} link2={card.github} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default ModalUs;
