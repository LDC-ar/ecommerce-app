import React, { useState } from "react";
import { textButton } from "../helpers/data";
import Modal from "./Modal";
import "./Buttons.css";
import "./Modal.css";

const ButtonOrder = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<div className="container">
				<button className="btn btnBuy" onClick={() => setShow(true)}>
					{textButton.order}
				</button>
				<Modal show={show} onClose={() => setShow(false)}>
					<h1>Añadido a la lista de espera</h1>
				</Modal>
			</div>
		</div>
	);
};

// 	return (
// 			// <button className="btn btnBuy" onClick={() => setShow(true)}}>{textButton.order}</button>
// 			<button className="btn" onClick={() => setShow(true)}>Modal</button>
// 			<Modal show={show} onClose={() => setShow(false)}>
//           <h1>Bienvenidos!</h1>
//         </Modal>
// 			)
// };

export default ButtonOrder;
