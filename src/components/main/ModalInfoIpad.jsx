import React from "react";
import "./Modal.css";

function ModalInfoIpad({ productInfo }) {
	const { title, description, displaySize, displayType, cameraType, chipset, storage, connector, network, cameraImg, connectorImg, chipsetImg, networkImg } = productInfo;

	return (
		<div className="modal-ipad-container">
			<div className="modal-ipad-container-header">
				<h3 className="modal-ipad-title">{title}</h3>
				<h4 className="modal-ipad-description">{description}</h4>
				<hr />
			</div>
			<div className="modal-ipad-display">
				<h5 className="modal-ipad-displaySize">{displaySize}</h5>
				<p className="modal-ipad-displayType">{displayType}</p>
			</div>
			<div className="modal-ipad-storage">
				<h5>STORAGE</h5>
				<p>{storage}</p>
			</div>
			<img src={cameraImg} alt="Camera" className="modal-ipad-cameraImg" />
			<div className="modal-ipad-camera">
				<p className="modal-ipad-cameraType">{cameraType}</p>
			</div>
			<img src={connectorImg} alt="Connector" className="modal-ipad-connectorImg" />
			<h5 className="modal-ipad-connector">{connector}</h5>
			<img src={chipsetImg} alt="Chipset" className="modal-ipad-chipsetImg" />
			<h5 className="modal-ipad-chipset">{chipset}</h5>
			<img src={networkImg} alt="Network" className="modal-ipad-networkImg" />
			<h5 className="modal-ipad-network">{network}</h5>
		</div>
	);
}

export default ModalInfoIpad;
