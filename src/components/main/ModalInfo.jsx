import React from "react";
import ModalInfoPhone from "./ModalInfoPhone";
import ModalInfoComputer from "./ModalInfoComputer";
import ModalInfoIpad from "./ModalInfoIpad";
import "./Modal.css";
import { RiCloseFill } from "react-icons/ri";

const ModalInfo = ({ category, show, onClose, productInfo }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="Wrapper">
			<div className="modal">
				<button onClick={onClose} className="btn-close">
					<span>
						<RiCloseFill />
					</span>
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
