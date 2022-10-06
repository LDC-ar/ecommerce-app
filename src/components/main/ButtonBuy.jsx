import React, { useState } from "react";
import { textButton } from "../helpers/data";
import Modal from "./Modal";
import "./Buttons.css";
import "./Modal.css";

const ButtonBuy = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<div className="container">
				<button className="btn btnCH btnBuy" onClick={() => setShow(true)}>
					{textButton.buy}
				</button>
				<Modal show={show} onClose={() => setShow(false)}>
					<h1>Producto agregado al carrito</h1>
				</Modal>
			</div>
		</div>
	);
};

export default ButtonBuy;
