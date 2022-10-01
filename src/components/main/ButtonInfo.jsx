import React, { useState } from "react";
import { textButton } from "../helpers/data";
import Modal from "./Modal";
import "./Buttons.css";
import "./Modal.css";

const ButtonInfo = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<div className="container">
				<button className="btn btnInfo btnCH" onClick={() => setShow(true)}>
					{textButton.learnMore}
				</button>
				<Modal show={show} onClose={() => setShow(false)}>
					<h1>Detalle de Producto</h1>
				</Modal>
			</div>
		</div>
	);
};

export default ButtonInfo;
