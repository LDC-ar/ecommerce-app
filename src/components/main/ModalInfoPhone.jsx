import React from "react";
import "./Modal.css";

function ModalInfoPhone({ productInfo }) {
	const { title, description, displaySize, displayType, cameraSystem, cameraType, battery, chipset, recognition, network, cameraImg, batteryImg, chipsetImg, recognitionImg, networkImg } = productInfo;

	return (
		<div className="modal-info-container">
			<div className="modal-info-container-header">
				<h3 className="modal-info-title">{title}</h3>
				<h4 className="modal-info-description">{description}</h4>
				<hr />
			</div>
			<div className="modal-info-display">
				<h5 className="modal-info-displaySize">{displaySize}</h5>
				<p className="modal-info-displayType">{displayType}</p>
			</div>
			<img src={cameraImg} alt="Camera" className="modal-info-cameraImg" />
			<div className="modal-info-camera">
				<h5 className="modal-info-cameraSystem">{cameraSystem}</h5>
				<p className="modal-info-cameraType">{cameraType}</p>
			</div>
			<img src={batteryImg} alt="Battery" className="modal-info-batteryImg" />
			<h5 className="modal-info-battery">{battery}</h5>
			<img src={chipsetImg} alt="Chipset" className="modal-info-chipsetImg" />
			<h5 className="modal-info-chipset">{chipset}</h5>
			<img src={recognitionImg} alt="Recognition" className="modal-info-recognitionImg" />
			<h5 className="modal-info-recognition">{recognition}</h5>
			<img src={networkImg} alt="Network" className="modal-info-networkImg" />
			<h5 className="modal-info-network">{network}</h5>
		</div>
	);
}

export default ModalInfoPhone;
