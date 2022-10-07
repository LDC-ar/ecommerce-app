import React, { useState } from "react";
import { textButton, productsInfo } from "../helpers/data";
import Modal from "./Modal";
import "./Buttons.css";
import "./Modal.css";

const ButtonOrder = ({ id }) => {
	// Estado 1: Muestra o no el modal
	const [show, setShow] = useState(false);

	// Estado 2: Muestra la info del producto en el modal //
	const [modalInfo, setModalInfo] = useState({});

	const handleClick = id => {
		return setShow(true), setModalInfo(...checkId(id));
	};

	function checkId(id) {
		return productsInfo.filter(product => product.id == id);
	}
	// FIN Estado 2 //

	return (
		<div>
			<div className="container">
				<button className="btn btnBuy" onClick={() => handleClick(id)}>
					{textButton.order}
				</button>
				<Modal show={show} productInfo={modalInfo} onClose={() => setShow(false)} />
			</div>
		</div>
	);
};

export default ButtonOrder;
