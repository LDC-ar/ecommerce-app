import React from "react";
import "./Modal.css";

function ModalInfoComputer({ productInfo }) {
	const { title, description, displaySize, displayType, chipset, cpu, gpu, ram, storage, battery, recognition, batteryImg, chipsetImg, recognitionImg } = productInfo;

	return (
		<div className="modal-computer-container">
			<div className="modal-computer-container-header">
				<h3 className="modal-computer-title">{title}</h3>
				<h4 className="modal-computer-description">{description}</h4>
				<hr />
			</div>
			<div className="modal-computer-display">
				<h5 className="modal-computer-displaySize">{displaySize}</h5>
				<p className="modal-computer-displayType">{displayType}</p>
			</div>
			<div className="modal-computer-cpu">
				<h5>CPU</h5>
				<p>{cpu}</p>
			</div>
			<div className="modal-computer-gpu">
				<h5>GPU</h5>
				<p>{gpu}</p>
			</div>
			<div className="modal-computer-ram">
				<h5>RAM</h5>
				<p>{ram}</p>
			</div>
			<div className="modal-computer-storage">
				<h5>STORAGE</h5>
				<p>{storage}</p>
			</div>
			<img src={batteryImg} alt="Battery" className="modal-computer-batteryImg" />
			<h5 className="modal-computer-battery">{battery}</h5>
			<img src={chipsetImg} alt="Chipset" className="modal-computer-chipsetImg" />
			<h5 className="modal-computer-chipset">{chipset}</h5>
			<img src={recognitionImg} alt="Recognition" className="modal-computer-recognitionImg" />
			<h5 className="modal-computer-recognition">{recognition}</h5>
		</div>
	);
}

export default ModalInfoComputer;
