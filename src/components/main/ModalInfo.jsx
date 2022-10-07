import React from "react";
import ModalInfoPhone from "./ModalInfoPhone";
import ModalInfoComputer from "./ModalInfoComputer";
import ModalInfoIpad from "./ModalInfoIpad";
import "./Modal.css";

const ModalInfo = ({ category, show, onClose, productInfo }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="Wrapper">
			<div className="modal">
				<button onClick={onClose} className="btn-close">
					<span>X</span>
				</button>
				{(() => {
					switch (category) {
						case "Phone":
							return <ModalInfoPhone productInfo={productInfo} />;
						case "Computer":
							return <ModalInfoComputer productInfo={productInfo} />;
						case "Ipad":
							return <ModalInfoIpad productInfo={productInfo} />;
						default:
							return null;
					}
				})()}
			</div>
		</div>
	);
};

export default ModalInfo;

/* <img src={img} alt={title} className="modal-info-img" />
<h3 className="modal-info-title">{title}</h3>
<h4 className="modal-info-description">{description}</h4>
<h5 className="modal-info-price">${price}</h5> */
